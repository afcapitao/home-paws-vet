import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppointmentForm } from "@/components/AppointmentForm";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const menuItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/#servicos" },
    { name: t("nav.about"), path: "/#quem-sou" },
    { name: t("nav.area"), path: "/#area" },
    { name: t("nav.schedule"), path: "/#horario" },
    { name: t("nav.contacts"), path: "/#contactos" },
    { name: t("nav.blog"), path: "/blog" },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/" && !location.hash;
    if (path.startsWith("/#")) return location.pathname === "/" && location.hash === path.slice(1);
    return location.pathname === path;
  };

  const NavLink = ({ item, onClick }: { item: typeof menuItems[0]; onClick?: () => void }) => {
    const activeClass = isActive(item.path)
      ? "text-primary font-medium"
      : "text-muted-foreground hover:text-foreground";
    const baseClass = `text-sm transition-colors whitespace-nowrap ${activeClass}`;

    if (item.path.startsWith("/#")) {
      return (
        <a href={item.path} className={baseClass} onClick={onClick}>
          {item.name}
        </a>
      );
    }
    return (
      <Link
        to={item.path}
        className={baseClass}
        onClick={() => {
          onClick?.();
          if (item.path === "/") window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0">
            <img src={logo} alt="Pet Home Vet" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden xl:flex items-center gap-5 flex-1 justify-center">
            {menuItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </div>

          {/* Right side: Language toggle + CTA + Mobile menu */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1 border border-border rounded-md p-1">
              <Button
                variant={i18n.language === "pt" ? "default" : "ghost"}
                size="sm"
                onClick={() => changeLanguage("pt")}
                className="h-7 px-2 text-xs"
              >
                PT
              </Button>
              <Button
                variant={i18n.language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => changeLanguage("en")}
                className="h-7 px-2 text-xs"
              >
                EN
              </Button>
            </div>

            <AppointmentForm>
              <Button variant="hero" size="sm" className="hidden sm:flex text-xs sm:text-sm">
                {t("nav.bookButton")}
              </Button>
            </AppointmentForm>

            {/* Mobile hamburger */}
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-popover z-50">
                {menuItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <NavLink item={item} onClick={() => setIsOpen(false)} />
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <AppointmentForm>
                    <button className="w-full text-left cursor-pointer text-sm font-medium text-primary px-2 py-1.5">
                      {t("nav.bookButton")}
                    </button>
                  </AppointmentForm>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
