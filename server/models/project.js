const { StringSelectMenuBuilder } = require("discord.js");
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: String,
    dashBoardId: {
        type: String,
        required: true
    },
    projectsForumId: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        required: true
    },
    managers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Member",
        },
    ],
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Member",
        },
    ],
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
        },
    ],
    subProjects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subProject",
        },
    ],
    categoryId: {
        type: String,
        required: true,
    },
    links: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "link",
        },
    ],
    skills: [
      {
        type: String
      }
    ],
    roles: [
        {
            name: String,
            id: String,
        }
    ]
});

projectSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash;
    },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
