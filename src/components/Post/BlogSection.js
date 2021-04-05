import React from "react";
import { BlogPostContainer, WordLine } from "./PostElement";
import Paragraph from "./Paragraph";
import { HeroH1 } from "../HeroSection/HeroElement";
import { FooterLink } from "../Footer/FooterElement";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import InformationTable from "../AdditionalInformation/InfoTable";
import EmojiBar from "./EmojiBar";
import Tags from "../AdditionalInformation/Tags";
import Subscribe from "../AdditionalInformation/subscribe";
import EndProfile from "../AdditionalInformation/EndProfile";
import "./BlogStyle.css";
const BlogSection = () => {
  const codesnippet = [
    `  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 2000);
  }, []);`,

    `const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};`,
    `  const [data, setData] = useState([]);
const [loading, setloading] = useState(undefined);
const [completed, setcompleted] = useState(undefined);`,
    `useEffect(() => {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        setloading(true);

        setTimeout(() => {
          setcompleted(true);
        }, 1000);
      });
  }, 2000);
}, []);`,
    `return (
  <>
    {!completed ? (
      <>
        {!loading ? (
          <Lottie options={defaultOptions1} height={200} width={200} />
        ) : (
          <Lottie options={defaultOptions2} height={100} width={100} />
        )}
      </>
    ) : (
      <>
        <h1>Your Data</h1>
      </>
    )}
  </>
);
}`,
    `return (
  <>
    {!completed ? (
      <>
        {!loading ? (
          <div className="spinner">
            <span>Loading...</span>
            <div className="half-spinner"></div>
          </div>
        ) : (
          <div className="completed">&#x2713;</div>
        )}
      </>
    ) : (
      <>
        <h1>Your Data</h1>
      </>
    )}
  </>
);`,
  ];

  return (
    <BlogPostContainer>
      <Paragraph>
        <p>Hey People,</p>
      </Paragraph>
      <Paragraph>
        <p>
          I was finding a good way to make Loading screen/animation for my small
          React application, and I found 3 different ways to make good loading
          screens,
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          Type-1 : Using{" "}
          <FooterLink
            href="https://www.npmjs.com/package/react-loading?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            react-loading
          </FooterLink>
          library.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          Type-2 : Using{" "}
          <FooterLink
            href="https://www.npmjs.com/package/react-lottie?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            react-lottie
          </FooterLink>
          library.
        </p>
      </Paragraph>
      <Paragraph>
        <p>Type-3 : Using simple CSS.</p>
      </Paragraph>
      <Paragraph>
        <p>
          If you prefer to watch video tutorial then you can watch it here else
          just watch first 2 minutes to get an idea of what we're going to build
          here..and keep reading!😄
        </p>
      </Paragraph>
      <Paragraph>
        <p>Let's Start Building...</p>
      </Paragraph>
      <Paragraph>
        <p>Create your react app with,</p>
      </Paragraph>
      <Paragraph>
        <p>Next, install two libraries that we're going to use.</p>
      </Paragraph>
      <Paragraph>
        <p>
          NOTE: Here, I'm using jsonplaceholder API to get data, to show how we
          can use pre-loader when using API.
        </p>
      </Paragraph>
      <iframe
        width="750"
        height="380"
        src="https://www.youtube.com/embed/Y7pL5wG5QOg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ margin: "1.5rem" }}
      ></iframe>
      <HeroH1 style={{ textAlign: "left", margin: "3rem 0.5rem" }}>
        Let's Start Building...
      </HeroH1>
      <Paragraph>
        <p>Create your react app with,</p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          npx create-react-app React-Loading-Screen
        </SyntaxHighlighter>
      </div>
      <Paragraph>
        <p>Next, install two libraries that we're going to use.</p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          npm install react-loading react-lottie
        </SyntaxHighlighter>
      </div>
      <Paragraph>
        <p>
          NOTE: Here, I'm using
          <FooterLink
            href="https://jsonplaceholder.typicode.com/guide/?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            jsonplaceholder API{" "}
          </FooterLink>
          to get data, to show how we can use pre-loader when using API.{" "}
        </p>
      </Paragraph>
      <HeroH1 style={{ textAlign: "left", margin: "3rem 0.5rem" }}>
        Type-1
      </HeroH1>
      <Paragraph>
        <p>Create separate file like PreLoader1.js.</p>
      </Paragraph>
      <Paragraph>
        <p>
          Create Functional Component and here, we're going to use two state,
        </p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          {
            "const [ data, setData ] = useState([]);\nconst [ done, setDone] = useState(undefined);"
          }
        </SyntaxHighlighter>
      </div>
      <Paragraph>
        <p>
          <strong>data state</strong>: To store data which comes from API call.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <strong>done state</strong>: It is boolean to decide weather to show
          pre-loader or not..
        </p>
      </Paragraph>
      <Paragraph>
        <p>Now in the useEffect,</p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          {codesnippet[0]}
        </SyntaxHighlighter>
      </div>
      <HeroH1 style={{ margin: "3rem 0.5rem" }}>
        You can put your own logic in useEffect!
      </HeroH1>
      <Paragraph>
        <p>Now in the above useEffect method,</p>
      </Paragraph>
      <Paragraph>
        <p>
          First we use fetch method to get data from api then we convert that
          data into json, then we will set data state with json data, and after
          that set done state to true.
        </p>
      </Paragraph>
      <HeroH1 style={{ margin: "3rem 0.5rem" }}>
        NOTE: Here I have used time out function for 2 seconds so that we can
        see loading screen for more time.
      </HeroH1>
      <Paragraph>
        <p>Now let's render our component.</p>
      </Paragraph>
      <iframe
        frameBorder={0}
        style={{ width: "80%", height: "500px" }}
        srcDoc='<html><body><style type="text/css">.gist .gist-data { height: 400px; }</style><script src="https://gist.github.com/c173c40b93fdb4e48269c00cdeeec9d8.js"></script></body></html>'
      />
      <Paragraph>
        <p>
          <strong>Line 22</strong>: we will check if{" "}
          <span className="highlightedSpan">done</span> state is false then we
          will render pre-loading component else we will render data we want to
          show.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <strong>Line 23</strong>: Here I have used react-loading library,
          where we only have to set type, color, height and width. you can find
          more functionalities on
          <FooterLink
            href="https://jsonplaceholder.typicode.com/guide/?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            here
          </FooterLink>
          .
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <strong>Line 30</strong>: From here I have mapped data state inside
          the ul tag which returns title of each post in li tag.{" "}
          <i>
            (use console.log() inside useEffect to see what kind of data we are
            getting)
          </i>
        </p>
      </Paragraph>
      <Paragraph>
        <p>That's the end of Part-1 here.</p>
      </Paragraph>

      {/* Type 2 conten*/}

      <HeroH1 style={{ textAlign: "left", margin: "3rem 0.5rem" }}>
        Type-2
      </HeroH1>
      <Paragraph>
        <p>Create new file and name it as PreLoader2.js</p>
      </Paragraph>
      <Paragraph>
        <p>Create functional component, and import react-Lottie library.</p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          {'import Lottie from "react-lottie"'}
        </SyntaxHighlighter>
      </div>
      <Paragraph>
        <p>
          In this type of loading screen we have to download animation files
          from
          <FooterLink
            href="https://lottiefiles.com/1055-world-locations?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            https://lottiefiles.com/
          </FooterLink>
          .
        </p>
      </Paragraph>
      <Paragraph>
        <p>For this tutorial i'm using below two files,</p>
      </Paragraph>
      <Paragraph>
        <p>
          Earth animation :
          <FooterLink
            href="https://lottiefiles.com/1127-success?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            https://lottiefiles.com/1055-world-locations
          </FooterLink>
          .
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          Success animation:
          <FooterLink
            href="https://lottiefiles.com/?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            https://lottiefiles.com/1127-success
          </FooterLink>
          .
        </p>
      </Paragraph>
      <Paragraph>
        <p>Let's import this json files like below,</p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          {
            'import * as location from "../1055-world-locations.json";\nimport * as success from "../1127-success.json";'
          }
        </SyntaxHighlighter>
      </div>
      <Paragraph>
        <p>
          As mentioned
          <FooterLink
            href="https://www.npmjs.com/package/react-lottie?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            here
          </FooterLink>
          in the react-Lottie library documentation, we need to set default
          options to use this animation files in our project so first declare
          this options as,
        </p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          {codesnippet[1]}
        </SyntaxHighlighter>
      </div>
      <Paragraph>
        <p>
          <i>defaultOptions1</i> for first file while defaultOptions2 for second
          file.
        </p>
      </Paragraph>
      <Paragraph>
        <p>In this tutorial we're going to use 3 state:</p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          {codesnippet[2]}
        </SyntaxHighlighter>
      </div>
      <Paragraph>
        <p>
          <strong>data state</strong>: To store data which comes from API call.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <strong>loading state</strong>: Boolean state for first animation
          file.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <strong>completed state</strong>: Boolean state for second animation
          file when API call is completed.
        </p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          {codesnippet[3]}
        </SyntaxHighlighter>
      </div>
      <HeroH1 style={{ margin: "3rem 0.5rem" }}>
        You can put your own logic in useEffect!
      </HeroH1>
      <Paragraph>
        <p>
          UseEffect method is almost same as in part-1, only difference is that
          instead of done state we have to set completed and loading state to
          true, Also, I have used one more timeout function for 1 sec to see the
          2nd animation.
        </p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          {codesnippet[4]}
        </SyntaxHighlighter>
      </div>
      <Paragraph>
        <p>As shown in the above code,</p>
      </Paragraph>
      <Paragraph>
        <p>
          in the return, if completed state is false then we will render loading
          screen else we will render our data.
        </p>
      </Paragraph>
      <Paragraph>
        <p>In the animation part we will do one more conditional rendering,</p>
      </Paragraph>
      <Paragraph>
        <p>
          when loading state is false then we will render the earth animation
          else we will render the success animation.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          Dont't forget to set{" "}
          <span className="highlightedSpan">{`options={defaultOptions1}`}</span>{" "}
          for file 1 and{" "}
          <span className="highlightedSpan">{`options={defaultOptions2}`}</span>{" "}
          for file 2.
        </p>
      </Paragraph>
      <Paragraph>
        <p>Full Code:</p>
      </Paragraph>
      <iframe
        frameBorder={0}
        style={{ width: "80%", height: "500px" }}
        srcDoc='<html><body><style type="text/css">.gist .gist-data { height: 400px; }</style><script src="https://gist.github.com/b09aa861ac0d34c36ab886c559b38af0.js"></script></body></html>'
      />
      <Paragraph>
        <p>
          Now as per the Creative Commons License of
          <FooterLink
            href="https://lottiefiles.com/page/license?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            https://lottiefiles.com/page/license
          </FooterLink>
          The creator(s) must be attributed in your application.
        </p>
      </Paragraph>
      <Paragraph>
        <p>You can attribute creator as shown in line no 60 to 71.</p>
      </Paragraph>
      <Paragraph>
        <p>That's the end of Part-2.</p>
      </Paragraph>

      {/*Type 3 */}

      <HeroH1 style={{ textAlign: "left", margin: "3rem 0.5rem" }}>
        Type-3
      </HeroH1>
      <Paragraph>
        <p>
          In this type we are not going to use any library instead we are only
          using simple css styling.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          Now the logic of displaying pre-loader is same as in the part-2 so
          here I'm not going to show you the whole process.
        </p>
      </Paragraph>
      <Paragraph>
        <p>Create new file PreLoader3.js</p>
      </Paragraph>
      <Paragraph>
        <p>
          Copy the whole code from PreLoader2.js file and remove all code
          related with react-Lottie library and keep everything as it is.
        </p>
      </Paragraph>
      <Paragraph>
        <p>only change return statement as shown below,</p>
      </Paragraph>
      <div className="codeSnippet" style={{ margin: "2rem 0rem" }}>
        <SyntaxHighlighter
          language="javascript"
          style={atelierCaveDark}
          wrapLongLines={true}
        >
          {codesnippet[5]}
        </SyntaxHighlighter>
      </div>
      <Paragraph>
        <p>In the above code,</p>
      </Paragraph>
      <Paragraph>
        <p>
          div with the class spinner contains Loading text and spinner. while
          div with the className completed contains success symbol.(✓).
        </p>
      </Paragraph>
      <Paragraph>
        <p>Now let's do some css styling.</p>
      </Paragraph>
      <Paragraph>
        <p>
          crate separate file preloader3.css for styling and import it in the
          preloader3.js file.
        </p>
      </Paragraph>
      <iframe
        frameBorder={0}
        style={{ width: "80%", height: "500px" }}
        srcDoc='<html><body><style type="text/css">.gist .gist-data { height: 400px; }</style><script src="https://gist.github.com/8e5552dcc539f15aca7916480b84c3dc.js"></script></body></html>'
      />
      <Paragraph>
        <p>Now,</p>
      </Paragraph>
      <Paragraph>
        <p>
          <strong>.spinner</strong> class is simply box for spinner.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <strong>.spinner span</strong> contains styling and animation for
          loading text.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <strong>.half-spinner</strong> contains styling for spinner.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          now to cut this whole spinner as in line no 20 you just have to set
          border top to transparent.
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <strong>.completed</strong> contains styling and animation for
          success(✓) symbol.
        </p>
      </Paragraph>
      <Paragraph>
        <p>This is the End of type 3. </p>
      </Paragraph>
      <Paragraph>
        <p>
          You can find Full-Code repository from
          <FooterLink
            href="https://github.com/codebucks27/React-Loading-Screen?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            here
          </FooterLink>
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <strong>Thanks for reading and supporting.😄</strong>
        </p>
      </Paragraph>
      <Paragraph>
        <p>Feel free to visit my youtube channel:</p>
      </Paragraph>
      <Paragraph>
        <p>
          <FooterLink
            href="https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            @CodeBucks
          </FooterLink>
        </p>
      </Paragraph>
      <Paragraph>
        <p>
          <i>Previously published</i>
          <FooterLink
            href="https://dev.to/codebucks/create-3-different-types-of-loading-screens-in-react-5bba?ref=hackernoon.com"
            target="_blank"
            style={{ marginLeft: "0rem", fontSize: "1.3rem" }}
          >
            here
          </FooterLink>
        </p>
      </Paragraph>
      <WordLine>
        <EmojiBar blogPost="false" style={{ justifyContent: "center" }} />
      </WordLine>
      <EndProfile />
      <InformationTable />
      <Tags />
      <Subscribe />
    </BlogPostContainer>
  );
};

export default BlogSection;
