import { Model } from "sequelize";
import {Post as PostAttributes} from "../interfaces/post"

module.exports = (sequelize: any, DataTypes: any) => {
  class Post extends Model<PostAttributes> implements PostAttributes {
    declare id: number;
    declare subject: string;
    declare content: string;
    declare author: string | null; // nullable

    /**
     * Helper method for defining  associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models: any) {
      // define association here
      Post.hasMany(models.Comment, {
        // Comment n:1 Post
        foreignKey: "postId", // foreign key name in junction table
        as: "comment", // Alias used when eager loading
      });
    }
  }

  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: { msg: "Please keep name under 50 characters", args: [1, 100] },
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "This field is required",
          },
          len: {
            msg: "Please keep comments within 1-5000 characters",
            args: [1, 5000],
          },
        },
      },
      author: {
        type: DataTypes.STRING,
        defaultValue: "Anonymous",
        allowNull: true,
        validate: {
          len: { msg: "Please keep name under 50 characters", args: [1, 50] },
        },
      },
    },
    {
      sequelize, //database connection
      validate: { //Model-wide validation
        preventXxsAttacks: function () {
          if (
            typeof this.subject === "string" && this.subject.toString().toLowerCase().includes("<script>") ||
            typeof this.content === "string" && this.content.toString().toLowerCase().includes("<script>") ||
            typeof this.author === "string" && this.author.toString().toLowerCase().includes("<script>")
          ) {
            throw new Error("Malicious code detected!");
          }
        }
      },
      modelName: "Post",
    }
  );
  return Post;
};
