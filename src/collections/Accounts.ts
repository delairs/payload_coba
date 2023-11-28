import { CollectionConfig } from "payload/types";

const Accounts: CollectionConfig = {
  slug: "accounts",
  auth: true,
  admin: {
    useAsTitle: "username",
  },
  fields: [
    {
      name: "username",
      type: "text",
      minLength: 4,
      maxLength: 20,
      required: true,
    },
    {
      name: "firstname",
      type: "text",
    },
  ],
};

export default Accounts;
