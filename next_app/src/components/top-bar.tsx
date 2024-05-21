import Image from "next/image";
import { Button } from "@/components/ui/button";
import Icons from "@/assets/icons";
import { SwitchCustom } from "@/components/ui/custom/switch";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/states";
import Link from "next/link";
import { toast } from "./ui/use-toast";
import { useState } from "react";
import Blueprints from "./ao/blueprints";
import Modules from "./ao/modules";
import { useProjectManager } from "@/hooks";
import { parseOutupt, runLua } from "@/lib/ao-vars";
import { unescape } from "querystring";
import Share from "./ao/share";

export default function TopBar() {
  const router = useRouter();
  const globalState = useGlobalState();
  const projectManager = useProjectManager();

  return (
    <nav className="py-5 px-3 flex border-b justify-between items-center h-16">
      <div className="flex px-3 gap-0.5 items-center">
        <Link href="/">
          <Image src="/icon.svg" alt="BetterIDEa" width={15} height={15} className="mr-5" />
        </Link>

        <Link href="/">
          <Button variant="ghost" className="text-md">
            Home
          </Button>
        </Link>
        <Link href="https://docs.betteridea.dev" target="_blank">
          <Button variant="ghost" className="text-md">
            Docs
          </Button>
        </Link>
        <Link href="https://learn.betteridea.dev" target="_blank">
          <Button variant="ghost" className="text-md">
            Learn
          </Button>
        </Link>
      </div>


      <div className="flex gap-1 items-center">
        {globalState.activeMode == "AO"
          && globalState.activeProject && <>
            <Share />
            <Modules />
            <Blueprints />
          </>
        }

        {/* <Button variant="link" className="p-2 h-7 hover:invert">
          <Image src={Icons.mailSVG} alt="Inbox" width={15} height={15} />
        </Button>

        <Button variant="link" className="p-2 h-7 hover:invert">
          <Image src={Icons.downloadSVG} alt="Download" width={15} height={15} />
        </Button>

        <Button variant="link" className="p-2 h-7 hover:invert">
          <Image src={Icons.sendSVG} alt="Send" width={15} height={15} />
        </Button> */}

        <SwitchCustom
          className="ml-5 hidden"
          onCheckedChange={(checked) => {
            globalState.activeMode == "AO" ? globalState.setActiveMode("WARP") : globalState.setActiveMode("AO");
            // checked ? router.replace(`/warp`) : router.replace(`/ao`);
          }}
          checked={globalState.activeMode == "WARP"}
        />
      </div>
    </nav>
  );
}
