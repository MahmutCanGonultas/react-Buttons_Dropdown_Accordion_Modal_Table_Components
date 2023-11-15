import Links from "./Link";

function Sidebar() {
  const links = [
    { label: "DropDown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Links
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Links>
    );
  });

  return (
    <div className="stick top-0 overflow-y-auto flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
