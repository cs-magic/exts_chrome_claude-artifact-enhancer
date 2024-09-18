import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@cs-magic/shadcn/dist/ui/dropdown-menu";
import {
  ImageDown,
  Images,
  LifeBuoy,
  Mail,
  MessageSquare,
  PlusCircle,
  UserPlus,
} from "lucide-react";
import CSMagicBanner from "../../../../assets/branding/cs-magic/cs-magic_banner_white.jpg";
import { doDownloadZip } from "../utils/doDownloadZip";
import { doCopyPng } from "../utils/doCopyPng";

console.log({ CSMagicBanner });

export function Trigger() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex
  items-center
  justify-center
  relative
  shrink-0
  ring-offset-2
  ring-offset-bg-300
  ring-accent-main-100
  focus-visible:outline-none
  focus-visible:ring-1
  disabled:pointer-events-none
  disabled:opacity-50
  disabled:shadow-none
  disabled:drop-shadow-none
          bg-[radial-gradient(ellipse,_var(--tw-gradient-stops))]
          from-bg-500/10
          from-50%
          to-bg-500/30
          border-0.5
          border-border-400
          font-medium
          font-styrene
          text-text-100/90
          transition-colors
          active:bg-bg-500/50
          hover:text-text-000
          hover:bg-bg-500/60 h-8 rounded-md px-3 text-xs min-w-[4rem] active:scale-[0.985] whitespace-nowrap"
        >
          Enhancer
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Claude Enhancer</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>SVG</DropdownMenuLabel>

          <DropdownMenuItem onClick={doDownloadZip}>
            <ImageDown className="mr-2 h-4 w-4" />
            <span>Download All</span>
            <DropdownMenuShortcut>⌘ G</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={doCopyPng}>
            <Images className="mr-2 h-4 w-4" />
            <span>Copy PNG</span>
            <DropdownMenuShortcut>⇧ ⌘ G</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger disabled>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Invite users</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>Message</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuItem disabled>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <img
            src={chrome.runtime.getURL("images/cs-magic_banner_white.jpg")}
            className={"w-full h-auto"}
            alt={"cs-magic"}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
