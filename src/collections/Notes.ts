import { CollectionConfig } from "payload/types";

const Notes: CollectionConfig = {
  slug: "notes",
  auth: true,
  admin: {
    useAsTitle: "content",
  },
  fields: [
    {
      name: "AuthorID",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "textarea",
    },
  ],
};

export default Notes;
