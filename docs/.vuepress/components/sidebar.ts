const sidebar = {
  "/": [
    { text: "Getting Started", link: "/getting-started" },
    {
      text: "Guide",
      collapsible: true,
      children: [
        "/guide/setup",
        "/guide/results",
        "/guide/board",
        "/guide/logo",
        "/guide/images",
        "/guide/points-system",
        "/guide/custom-board",
        "/guide/slots",
        "/guide/custom-slots",
        "/guide/delete-results",
      ],
    },
    {
      text: "Api",
      collapsible: true,
      children: ["/api/results", "/api/board"],
    },
  ],
};

export default sidebar;
