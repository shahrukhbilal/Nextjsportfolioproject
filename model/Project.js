import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    features: {
      type: [String], // store as array of features
      default: [],
    },
    techStack: {
      type: [String], // store as array of technologies
      default: [],
    },
    image: { type: String, required: true },
    github: { type: String },
    liveDemo: { type: String },
  },
  { timestamps: true } // automatically adds createdAt & updatedAt
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
