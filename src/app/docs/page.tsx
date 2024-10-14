"use client"

import { DocsProvider } from "@/docs/context/context";
import BlockquotePage from "@/docs/pages/components/BlockquotePage";
import BreadcrumbPage from "@/docs/pages/components/BreadcrumbPage";
import CodePage from "@/docs/pages/components/CodePage";
import CodePreviewPage from "@/docs/pages/components/CodePreviewPage";
import CommandPromptPage from "@/docs/pages/components/CommandPromptPage";
import CustomComponents from "@/docs/pages/components/CustomComponents";
import HeaderPage from "@/docs/pages/components/HeaderPage";
import HighlightPage from "@/docs/pages/components/HighlightPage";
import ImagePage from "@/docs/pages/components/ImagePage";
import LinkPage from "@/docs/pages/components/Link";
import NavigatorPage from "@/docs/pages/components/Navigator";
import TextPage from "@/docs/pages/components/TextPage";
import TitlePage from "@/docs/pages/components/TitleComponent";
import Page404 from "@/docs/pages/concepts/404Page";
import CustomizabilityPage from "@/docs/pages/concepts/CustomPage";
import LayoutPage from "@/docs/pages/concepts/Layout";
import PagesPage from "@/docs/pages/concepts/Pages";
import SearchPage from "@/docs/pages/concepts/SearchPage";
import SectionPage from "@/docs/pages/concepts/Sections";
import ThemesPage from "@/docs/pages/concepts/ThemesPage";
import Installation from "@/docs/pages/Installation";
import Introductions from "@/docs/pages/Introduction";
import Usage from "@/docs/pages/Usage";
import Docs from "@/docs/ui/components/Docs/Docs";
import Page from "@/docs/ui/components/Page/Page";
import Section from "@/docs/ui/components/Section/Section";

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
          withTableOfContent={true}
        >
          <Installation/>
        </Page>
        <Page
            title={"Usage"}
            withTableOfContent={true}
          >
            <Usage/>
          </Page>
        <Section name="Features" alwaysOpen={true}>
          <Page
            title={"Pages"}
            withTableOfContent={true}
          >
            <PagesPage/>
          </Page>
          <Page
            title={"Sections"}
            withTableOfContent={true}
          >
            <SectionPage/>
          </Page>
          <Page
            title={"Layout"}
            withTableOfContent={true}
          >
            <LayoutPage/>
          </Page>
          <Page
            title={"Navigating"}
            withTableOfContent={true}
          >
            <p>3</p>
          </Page>
          <Page
            title={"Search"}
            withTableOfContent={true}
          >
            <SearchPage/>
          </Page>
          <Page
            title={"Themes"}
            withTableOfContent={true}
          >
            <ThemesPage/>
          </Page>
          <Page
            title={"Components"}
            withTableOfContent={true}
          >
            <p>3</p>
          </Page>
          <Page
            title={"Settings"}
            withTableOfContent={true}
          >
            <p>3</p>
          </Page>
          <Page
            title={"404"}
            withTableOfContent={true}
          >
            <Page404/>
          </Page>
          <Page
            title={"Customizability"}
            withTableOfContent={true}
          >
            <CustomizabilityPage/>
          </Page>
        </Section>
        <Section name="Components" alwaysOpen={true}>
          <Page
            title={"Blockquote"}
            withTableOfContent={true}
          >
            <BlockquotePage/>
          </Page> 
          <Page
            title={"Breadcrumb"}
            withTableOfContent={true}
          >
            <BreadcrumbPage/>
          </Page>
          <Page
            title={"Code"}
            withTableOfContent={true}
          >
            <CodePage/>
          </Page>
          <Page
            title={"CodePreview"}
            withTableOfContent={true}
          >
            <CodePreviewPage/>
          </Page>
          <Page
            title={"CommandPrompt"}
            withTableOfContent={true}
          >
            <CommandPromptPage/>
          </Page>
          <Page
            title={"Header"}
            withTableOfContent={true}
          >
            <HeaderPage/>
          </Page>
          <Page
            title={"Highlight"}
            withTableOfContent={true}
          >
            <HighlightPage/>
          </Page>
          <Page
            title={"Image"}
            withTableOfContent={true}
          >
            <ImagePage/>
          </Page>
          <Page
            title={"Link"}
            withTableOfContent={true}
          >
            <LinkPage/>
          </Page>
          <Page
            title={"Navigator"}
            withTableOfContent={true}
          >
            <NavigatorPage/>
          </Page>
          <Page
            title={"Text"}
            withTableOfContent={true}
          >
            <TextPage/>
          </Page>
          <Page
            title={"Title"}
            withTableOfContent={true}
          >
            <TitlePage/>
          </Page>
          <Page
            title={"Custom Components"}
            withTableOfContent={true}
          >
            <CustomComponents/>
          </Page>
  
        </Section> 
      </Docs>
    </DocsProvider>
  );
}
