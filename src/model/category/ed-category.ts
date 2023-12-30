import mongoose, { Document, Schema } from 'mongoose';
import { database } from '../../services/databases/mongodb';

const Scheema = mongoose.Schema;

interface Category extends Document {
  name: {
    en?: string;
    fr?: string;
    ar?: string;
  };
}

const categorySchema: Schema<Category> = new Scheema(
  {
    name: {
      en: { type: String },
      fr: { type: String },
      ar: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

export = database.model<Category>('ed_category', categorySchema);
