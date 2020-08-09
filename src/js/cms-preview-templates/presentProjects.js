import React from "react";
import format from "date-fns/format";

export default class PresentProjects extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="flex justify-between grey-3">
        <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
        <p>Read in x minutes</p>
      </div>
      <div className="cms mw6">
        {
            entry.getIn(["data", "description"])=='present'? <p>success</p>:<p>No</p>
        }
        { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
        { widgetFor("body") }
      </div>
    </div>;
  }
}
