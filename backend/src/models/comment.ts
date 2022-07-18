import { Model } from "sequelize";
import { Comment as CommentAttributes } from "../interfaces/comment";

module.exports = (sequelize: any, DataTypes: any) => {
  class Comment extends Model<CommentAttributes> implements CommentAttributes {
    declare id: number;
    declare content: string;
    declare author: string | null;
    declare postId: number;

    /**
     * Helper method for defining  associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // define association here (cardinal relationship)
    static associate(models: any) {
      // define association here
      Comment.belongsTo(models.Post, {
        // Comment n:1 Post
        foreignKey: "postId", // foreign key name in junction table
        as: "post", // Alias used when eager loading
      });
    } 
  }
  Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            msg: "This field is required",
          },
          len: {
            msg: "Please keep comments within 1-2000 characters",
            args: [1, 2000],
          },
        },
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        defaultValue: "Anonymous",
        allowNull: true, // allow null, but not empty (falsy) string
        validate: {

          len: { msg: "Please keep name under 50 characters", args: [1, 50] },
        },
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      validate: {//Model-wide validation
        preventXxsAttacks: function () {
          if (
            typeof this.content === "string" && this.content.toString().toLowerCase().includes("<script>") ||
            typeof this.author === "string" && this.author.toString().toLowerCase().includes("<script>")
          ) {
            throw new Error("Malicious code detected!");
          }
        }
      },
      modelName: "Comment",
    }
  );
  return Comment;
};
