import {
  EuiBreadcrumb,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiHeaderSections,
  EuiIcon,
  EuiAvatar,
} from "@elastic/eui";

export const Navbar = () => {
  const renderLogo = (
    <EuiHeaderLogo
      iconType="logoElastic"
      href="#"
      onClick={(e) => e.preventDefault()}
      aria-label="Go to home page"
    />
  );

  const renderSpaces = (
    //@ts-ignore
    <EuiHeaderSectionItemButton aria-label="Spaces menu">
      <EuiAvatar type="space" name="Sales Team" size="s" />
    </EuiHeaderSectionItemButton>
  );

  const breadcrumbs: EuiBreadcrumb[] = [
    {
      text: "Management",
      href: "#",
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: "Users",
      href: "#",
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: "Create",
    },
  ];

  const renderSearch = (
    //@ts-ignore
    <EuiHeaderSectionItemButton disabled aria-label="Sitewide search">
      {
        //@ts-ignore
        <EuiIcon type="search" size="m" />
      }
    </EuiHeaderSectionItemButton>
  );
  const renderUser = (
    //@ts-ignore
    <EuiHeaderSectionItemButton disabled aria-label="Account menu">
      <EuiAvatar isDisabled name="John Username" size="s" />
    </EuiHeaderSectionItemButton>
  );

  const renderApps = (
    //@ts-ignore
    <EuiHeaderSectionItemButton
      disabled
      aria-label="Apps menu with 1 new app"
      notification="1"
    >
      {
        //@ts-ignore
        <EuiIcon type="apps" size="m" />
      }
    </EuiHeaderSectionItemButton>
  );

  const sections: EuiHeaderSections[] = [
    {
      items: [renderLogo, renderSpaces],
      breadcrumbs: breadcrumbs,
      breadcrumbProps: {
        "aria-label": "Header sections breadcrumbs",
      },
    },
    {
      items: [renderSearch, renderUser, renderApps],
    },
  ];

  return <EuiHeader sections={sections} />;
};
