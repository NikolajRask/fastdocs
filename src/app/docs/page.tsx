"use client"

import { DocsProvider } from "@/docs/context/context";
import LinkPage from "@/docs/pages/components/Link";
import Page404 from "@/docs/pages/concepts/404Page";
import PagesPage from "@/docs/pages/concepts/Pages";
import SectionPage from "@/docs/pages/concepts/Sections";
import Installation from "@/docs/pages/Installation";
import Introductions from "@/docs/pages/Introduction";
import Usage from "@/docs/pages/Usage";
import Docs from "@/docs/ui/components/Docs/Docs";
import Page from "@/docs/ui/components/Page/Page";
import Section from "@/docs/ui/components/Section/Section";
import { useTheme } from "@/docs/utils/use-theme";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <DocsProvider>
      <Docs title="Docs">
        <Page
          title={"Introduction"}
          withTableOfContent={true}
        >
          <Introductions/>
        </Page>
        <Page
          title={"Installation"}
        >
          <Installation/>
        </Page>
        <Page
            title={"Usage"}
          >
            <Usage/>
          </Page>
        <Section name="Features" alwaysOpen={true}>
          <Page
            title={"Pages"}
          >
            <PagesPage/>
          </Page>
          <Page
            title={"Sections"}
          >
            <SectionPage/>
          </Page>
          <Page
            title={"Layout"}
          >
            <p>3</p>
          </Page>
          <Page
            title={"Navigating"}
          >
            <p>3</p>
          </Page>
          <Page
            title={"Search"}
          >
            <p>3</p>
          </Page>
          <Page
            title={"Themes"}
          >
            <p>3</p>
          </Page>
          <Page
            title={"Components"}
          >
            <p>3</p>
          </Page>
          <Page
            title={"Settings"}
          >
            <p>3</p>
          </Page>
          <Page
            title={"404"}
          >
            <Page404/>
          </Page>
          <Page
            title={"Customizability"}
          >
            <p>3</p>
          </Page>
        </Section>
        <Section name="Components" alwaysOpen={true}>
          <Page
            title={"Breadcrumb"}
          >
            <p></p>
          </Page>
          <Page
            title={"Card"}
          >
            <p></p>
          </Page>
          <Page
            title={"Code"}
          >
            <p></p>
          </Page>
          <Page
            title={"CodePreview"}
          >
            <p></p>
          </Page>
          <Page
            title={"CommandPrompt"}
          >
            <p></p>
          </Page>
          <Page
            title={"Grid"}
          >
            <p></p>
          </Page>
          <Page
            title={"Header"}
          >
            <p></p>
          </Page>
          <Page
            title={"Highlight"}
          >
            <p></p>
          </Page>
          <Page
            title={"Image"}
          >
            <p></p>
          </Page>
          <Page
            title={"Link"}
          >
            <LinkPage/>
          </Page>
          <Page
            title={"Navigator"}
          >
            <p></p>
          </Page>
          <Page
            title={"SEO"}
          >
            <p></p>
          </Page>
          <Page
            title={"Text"}
          >
            <p></p>
          </Page>
          <Page
            title={"Title"}
          >
            <p></p>
          </Page>
          <Page
            title={"Custom Components"}
          >
            <p></p>
          </Page>
  
        </Section> 
      </Docs>
    </DocsProvider>
  );
}
