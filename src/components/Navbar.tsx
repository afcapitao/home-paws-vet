import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
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
    { name: t("nav.about"), path: "/quem-sou" },
    { name: t("nav.area"), path: "/#area" },
    { name: t("nav.schedule"), path: "/#horario" },
    { name: t("nav.contacts"), path: "/#contactos" },
    { name: t("nav.blog"), path: "/blog" },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button and Logo */}
          <div className="flex items-center gap-4">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-popover z-50">
                {menuItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    {item.path.startsWith('/#') ? (
                      <a
                        href={item.path}
                        className={`cursor-pointer ${
                          isActive(item.path) ? "bg-accent text-accent-foreground font-medium" : ""
                        }`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`cursor-pointer ${
                          isActive(item.path) ? "bg-accent text-accent-foreground font-medium" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Desktop menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="hidden md:flex">
                <Button variant="ghost">
                  <Menu className="h-5 w-5 mr-2" />
                  {t("nav.menu")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-popover z-50">
                {menuItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    {item.path.startsWith('/#') ? (
                      <a
                        href={item.path}
                        className={`cursor-pointer ${
                          isActive(item.path) ? "bg-accent text-accent-foreground font-medium" : ""
                        }`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`cursor-pointer ${
                          isActive(item.path) ? "bg-accent text-accent-foreground font-medium" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="bg-primary rounded-full p-2">
                <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="font-bold text-lg text-foreground">Pet Home Vet</span>
            </Link>
          </div>

          {/* Language Buttons & CTA */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 border border-border rounded-md p-1">
              <Button
                variant={i18n.language === 'pt' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('pt')}
                className="h-8 px-3 text-xs"
              >
                PT
              </Button>
              <Button
                variant={i18n.language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('en')}
                className="h-8 px-3 text-xs"
              >
                EN
              </Button>
            </div>
            <AppointmentForm>
              <Button variant="hero" size="sm" className="hidden sm:flex">
                {t("nav.bookButton")}
              </Button>
            </AppointmentForm>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
