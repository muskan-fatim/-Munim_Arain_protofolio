export default {
    name: "Project",
    title: "project",
    type: "document",
    fields: [
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // Allows cropping & focal points
        },
      },
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule:any) => Rule.required().max(100), // Max 100 characters
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule:any) => Rule.required().max(500), // Max 500 characters
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "string" }],
        validation: (Rule:any) => Rule.min(1), // At least one tag required
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        options: {
          dateFormat: "YYYY-MM-DD",
          timeFormat: "HH:mm",
          calendarTodayLabel: "Today",
        },
        initialValue: () => new Date().toISOString(), // Auto-set timestamp
      },
    ],
  };
  