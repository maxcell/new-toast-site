/* @jsx jsx */
import { Fragment } from "preact";
import { jsx } from "@emotion/core";
import Icon, { iconFromList } from "../components/small-icons/index.js";
import SocialButton from "../components/social-button/index.js";
const maxWidth = "800px";
const images = preval`
  const fs = require('fs');
  const path = require('path')

  const partyCorgiPath = path.resolve(__dirname, 'src/components/party-corgi.gif')
  
  module.exports = {
    partyCorgi: fs.readFileSync(partyCorgiPath, 'base64')
  }
`;

const List = ({ title, subtitle, secondary, ...props }) => (
  <div css={{ maxWidth, marginBottom: "3rem", gridColumn: "2/4" }}>
    <div
      css={{
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2
        css={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 600,
          color: "#eef1f7",
        }}
      >
        {title}
      </h2>
      {secondary}
    </div>
    <ul css={{ listStyleType: "none", margin: 0, padding: 0 }}>
      {props.children}
    </ul>
  </div>
);

const ListItem = ({ to, logo, children }) => {
  return (
    <li>
      <a
        href={to}
        css={{
          color: "rgba(255,255,255,0.86)",
          display: "flex",
          borderRadius: "8px",
          textDecoration: "none",
          "&:hover": {
            backgroundColor: "#2D3747",
          },
          padding: "1rem",
          margin: "0 -1rem",
        }}
      >
        <Icon icon={logo} />
        <span css={{ marginLeft: "10px" }}>{children}</span>
      </a>
    </li>
  );
};

export default (props) => {
  const data = {
    highlightedLessons: props.eggheadLessons || [],
    recentPosts: props.posts || [],
  };
  return (
    <main
      css={{
        display: "grid",
        color: "rgba(255, 255, 255, 0.86)",
        gridTemplateColumns:
          "minmax(1.2rem, 1fr) minmax(auto, 400px) minmax(auto, 400px) minmax(1.2rem, 1fr)",
        "@media screen and (max-width: 800px)": {
          gridTemplateColumns:
            "minmax(1.2rem, 1fr) minmax(auto, 400px) minmax(auto, 400px) minmax(1.2rem, 1fr)",
        },
      }}
    >
      {/* <SEO title="Chris Biscardi" /> */}

      <div
        css={{
          maxWidth,
          marginTop: "75px",
          gridColumn: "2/4",
        }}
      >
        <h1
          css={{
            fontSize: "3rem",
            marginBottom: ".3em",
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 700,
            color: "#eef1f7",
          }}
        >
          Hey, I&rsquo;m Chris
          <img
            css={{
              display: "inline",
              height: "60px",
              position: "relative",
              top: "12px",
              marginLeft: "1rem",
            }}
            src={`data:image/gif;base64,${images.partyCorgi}`}
            alt="party corgi rainbow animated"
          />
        </h1>
        <p
          css={{
            fontSize: "1.2rem",
            fontWeight: 300,
            lineHeight: 1.5,
            maxWidth: "32em",
            color: "#eef1f7",
            gridColumn: "2/4",
          }}
        >
          <span>
            I'm an independent consultant that works with startups built on OSS.
            Here I write about JAMStack, Serverless, MDX, and more. This site is
            built with ESModules,{" "}
          </span>
          <a
            css={{
              backgroundImage: `linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)`,
              "&[href^='/']": {
                backgroundImage: `linear-gradient(90deg, rgba(251,89,74,1) 0%, rgba(251,222,75,1) 25%, rgba(112,228,112,1) 50%, rgba(51,183,255,1) 75%)`,
              },
              "-webkit-background-clip": `text`,
              "-webkit-text-fill-color": `rgba(255,255,255,0.46)`,
              display: "inline-block",
              "&:hover": {
                "-webkit-text-fill-color": `rgba(255,255,255,.1)`,
              },
            }}
            href="https://twitter.com/toastdotdev"
          >
            Toast
          </a>
          <span>, and MDX. The content is written in </span>
          <a
            css={{
              backgroundImage: `linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)`,
              "&[href^='/']": {
                backgroundImage: `linear-gradient(90deg, rgba(251,89,74,1) 0%, rgba(251,222,75,1) 25%, rgba(112,228,112,1) 50%, rgba(51,183,255,1) 75%)`,
              },
              "-webkit-background-clip": `text`,
              "-webkit-text-fill-color": `rgba(255,255,255,0.46)`,
              display: "inline-block",
              "&:hover": {
                "-webkit-text-fill-color": `rgba(255,255,255,.1)`,
              },
            }}
            href="https://twitter.com/sectortools"
          >
            Sector
          </a>
          .
        </p>
        <ul
          css={{
            margin: 0,
            marginTop: "2.5rem",
            marginBottom: "7rem",
            padding: 0,
            listStyleType: "none",
            display: "flex",
            flexWrap: "wrap",
            gridColumn: "2/4",
            "& > li": {
              marginRight: ".5rem",
              marginTop: ".5rem",
            },
          }}
        >
          <li>
            <SocialButton
              href="https://twitter.com/chrisbiscardi"
              icon="twitter"
            >
              Twitter
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://www.twitch.tv/chrisbiscardi"
              icon="twitch"
            >
              Twitch
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://www.youtube.com/channel/UCiSIL42pQRpc-8JNiYDFyzQ"
              icon="youtube"
            >
              YouTube
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://github.com/ChristopherBiscardi"
              icon="github"
            >
              GitHub
            </SocialButton>
          </li>
        </ul>
      </div>
      <List
        title="Latest Posts"
        secondary={
          <a
            href="/garden"
            css={{
              color: "rgba(255,255,255,0.86)",
              textDecoration: "none",
              // margin is to align baseline with heading
              marginBottom: "2px",
              alignSelf: "flex-end",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            all posts
          </a>
        }
      >
        {data.recentPosts.map(({ id, title, slug, tags }) => (
          <ListItem logo={iconFromList(tags)} to={slug} key={id}>
            {title}
          </ListItem>
        ))}
      </List>
    </main>
  );
};
