import { fireEvent, screen, waitFor } from "@testing-library/react";
import { Sidebar } from ".";
import { render } from "@/common/utils/testing";
import { SidebarConfigProvider } from "@/context/sidebar-config.provider";

describe("Sidebar component", () => {
  it("renders default sidebar", () => {
    render(
      <Sidebar
        menuProps={{
          items: [
            { key: "home", label: "Home" },
            { key: "about", label: "About" },
          ],
        }}
      />,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("render sidebar with header", () => {
    render(<Sidebar header={<div>Header Content</div>} menuProps={{ items: [] }} />);

    expect(screen.getByText("Header Content")).toBeInTheDocument();
  });

  it("render sidebar with header and menu", () => {
    render(
      <Sidebar
        header={<div>Header Content</div>}
        menuProps={{
          items: [
            { key: "home", label: "Home" },
            { key: "about", label: "About" },
          ],
        }}
      />,
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
        menuProps={{ items: [] }}
      />,
    );

    expect(screen.getByText("Header Content")).toBeInTheDocument();
    expect(screen.getByText("Footer Content")).toBeInTheDocument();
  });

  it("renders sidebar with header, footer, and menu", () => {
    render(
      <Sidebar
        header={<div>Header Content</div>}
        footer={<div>Footer Content</div>}
        menuProps={{
          items: [
            { key: "home", label: "Home" },
            { key: "about", label: "About" },
          ],
        }}
      />,
    );

    expect(screen.getByText("Header Content")).toBeInTheDocument();
    expect(screen.getByText("Footer Content")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders sidebar with collapsible button", async () => {
    const { container } = render(
      <SidebarConfigProvider>
        <Sidebar
          menuProps={{
            items: [
              { key: "home", label: "Home" },
              { key: "about", label: "About" },
            ],
          }}
          collapsible
        />
      </SidebarConfigProvider>,
    );

    expect(screen.getByTestId("sidebar-collapse-button")).toBeInTheDocument();

    const aside = container.querySelector(".ant-layout-sider");
    expect(aside).not.toHaveClass("ant-layout-sider-collapsed");

    expect(screen.getByText("Home")).toBeVisible();
    expect(screen.getByText("About")).toBeVisible();

    fireEvent.click(screen.getByTestId("sidebar-collapse-button"));

    await waitFor(() => {
      expect(aside).toHaveClass("ant-layout-sider-collapsed");
    });

    fireEvent.click(screen.getByTestId("sidebar-collapse-button"));

    await waitFor(() => {
      expect(aside).not.toHaveClass("ant-layout-sider-collapsed");
    });
  });
});
