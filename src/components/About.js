import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./../App.css";

const input = "# header here!\n\nand paragraph here!";

export class About extends Component {
  state = {
    markdown: ""
  };

  componentWillMount() {
    const reader = new FileReader();
    var self = this;

    // This fires after the blob has been read/loaded.
    reader.addEventListener("loadend", e => {
      self.setState({ markdown: e.srcElement.result });
    });

    window.dbx.filesDownload({ path: "/profiles.txt" }).then(response => {
      reader.readAsText(response.fileBlob);
    });
  }

  render() {
    return (
      <div className="content">
        <h1>
          <a href="tel:+1-805-756-6181">(805)-756-6181</a>
        </h1>

        <ReactMarkdown source={this.state.markdown} />
      </div>
    );
  }
}

export default About;
