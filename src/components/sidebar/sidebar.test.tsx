import { screen } from "@testing-library/react";
import { Sidebar } from ".";
import { render } from "@/common/utils/testing";

describe("Sidebar component", () => {
  it("renders default sidebar", () => {
    render(<Sidebar menuProps={{items: [
      { key: "home", label: "Home" },
      { key: "about", label: "About" },
    ]}} />);
    
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("render sidebar with header", () => {
    render(<Sidebar header={<div>Header Content</div>} menuProps={{items: []}} />);

    expect(screen.getByText("Header Content")).toBeInTheDocument();
  });

  it("render sidebar with header and menu", () => {
    render(
      <Sidebar 
        header={<div>Header Content</div>} 
        menuProps={{items: [
          { key: "home", label: "Home" },
          { key: "about", label: "About" },
        ]}} 
      />
    );

    expect(screen.getByText("Header Content")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders sidebar with header and footer", () => {
    render(
      <Sidebar 
        header={<div>Header Content</div>} 
        footer={<div>Footer Content</div>} 
        menuProps={{items: []}} 
      />
    );

    expect(screen.getByText("Header Content")).toBeInTheDocument();
    expect(screen.getByText("Footer Content")).toBeInTheDocument();
  });

  it("renders sidebar with header, footer, and menu", () => {
    render(
      <Sidebar 
        header={<div>Header Content</div>} 
        footer={<div>Footer Content</div>} 
        menuProps={{items: [
          { key: "home", label: "Home" },
          { key: "about", label: "About" },
        ]}} 
      />
    );

    expect(screen.getByText("Header Content")).toBeInTheDocument();
    expect(screen.getByText("Footer Content")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
