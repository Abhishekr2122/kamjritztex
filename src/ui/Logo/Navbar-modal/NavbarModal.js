export default function NavbarModal({ currentNavItem }) {
  if (currentNavItem === "") {
    return null;
  }

  if (currentNavItem === "work") {
    return <div>hello there</div>;
  }
}
