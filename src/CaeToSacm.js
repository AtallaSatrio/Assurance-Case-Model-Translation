import React, { Component } from "react";
import mf from "diagram-library";
import cm from "mindfusion-common";
import { DiagramView, NodeListView } from "diagram-library-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import "./Home.css";
import "./index.css";

var Claim = 1;
var Argument = 1;
var Reference = 1;
var Goal = 1;
var AbstractClaim = 1;
var AssumedClaim = 1;
var AxiomaticClaim = 1;
var DefeatedClaim = 1;
var NeedsSupport = 1;
var Justification = 1;
var Assumption = 1;
var Strategy = 1;
var Solution = 1;
var Context = 1;
var AP = 1;
var APB = 1;
var API = 1;
var AG = 1;
var AC = 1;
var AS = 1;
var AA = 1;
var AJ = 1;
var ACC = 1;
var ACA = 1;
var ACX = 1;
var ACR = 1;
var Nomer = 0;
// import OrgChartNode from './OrgChartNode';
// const AbstractClaimSvg = require("./notasi/SACM/Claim/AbstractClaim.svg");
// const AsCitedSVG = require("./notasi/SACM/Claim/AsCitedClaim.svg");
// const AsCitedSVG2 = require("./notasi/SACM/Claim/AsCitedClaim2.svg");
var Nomer = 0;
const nodeDict = {
  textFie: {
    svg: require("./notasi/Text.svg"),
    name: "Text Field",
  },
  nullnote3: {
    svg: require("./notasi/nullnote.svg"),
    name: "SACM NOTATION",
  },
  sacmClaim: {
    svg: require("./notasi/SACM/Claim/Claim.svg"),
    name: "SACM Claim",
  },
  abstract: {
    svg: require("./notasi/SACM/Claim/AbstractClaim.svg"),
    name: " SACM Abstract Claim",
  },

  sacmAssumed: {
    svg: require("./notasi/SACM/Claim/AssumedClaim.svg"),
    name: "SACM Assumed Claim ",
  },
  axiomatic: {
    svg: require("./notasi/SACM/Claim/AxiomaticClaim.svg"),
    name: "SACM Axiomatic Claim ",
  },
  defeated: {
    svg: require("./notasi/SACM/Claim/DefeatedClaim.svg"),
    name: "SACM Defeated Claim ",
  },
  needsupport: {
    svg: require("./notasi/SACM/Claim/NeedSupportClaim.svg"),
    name: "SACM NeedSupport Claim ",
  },
  ascited: {
    svg: require("./notasi/SACM/Claim/AsCitedClaim.svg"),
    name: "SACM AsCited Claim",
  },
  AsCitedAssumed: {
    svg: require("./notasi/SACM/Claim/AsCitedAssumed.svg"),
    name: "SACM AsCited Assumed",
  },
  AsCitedAxiomatic: {
    svg: require("./notasi/SACM/Claim/AsCitedAxiomatic.svg"),
    name: "SACM AsCited Axiomatic",
  },
  argumentreasoning: {
    svg: require("./notasi/SACM/ArgumentReasoning.svg"),
    name: "SACM Argument Reasoning ",
  },
  artifactreference: {
    svg: require("./notasi/SACM/ArtifactReference.svg"),
    name: "SACM Artifact Reference",
  },
  AsCitedReference: {
    svg: require("./notasi/SACM/AsCitedReference.svg"),
    name: "SACM AsCited Reference",
  },
  // artifactreference1: {
  //   svg: require("./notasi/SACM/ArtifactReference1.svg"),
  //   name: "Artifact Reference",
  // },
  ArgumentPackage: {
    svg: require("./notasi/SACM/ArgumentPackage.svg"),
    name: "SACM Argument Package",
  },
  ArgumentPackageBinding: {
    svg: require("./notasi/SACM/argumentpackagebinding.svg"),
    name: "SACM Argument Package Binding",
  },
  ArgumentPackageInterface: {
    svg: require("./notasi/SACM/ArgumentPackageInterface.svg"),
    name: "SACM Argument Package Interface",
  },
  spc4: {
    svg: require("./notasi/nullnote.svg"),
    name: "",
  },
  spc5: {
    svg: require("./notasi/nullnote.svg"),
    name: "",
  },
  spc6: {
    svg: require("./notasi/nullnote.svg"),
    name: "",
  },
  nullnote: {
    svg: require("./notasi/nullnote.svg"),
    name: "GSN NOTATION",
  },
  gsnGoal: {
    svg: require("./notasi/GSN/Goal.svg"),
    name: "GSN Goal",
  },
  gsnAssumption: {
    svg: require("./notasi/GSN/Assumption.svg"),
    name: "GSN Assumption",
  },
  gsnContext: {
    svg: require("./notasi/GSN/Context.svg"),
    name: "GSN Context",
  },
  gsnJustification: {
    svg: require("./notasi/GSN/Justification.svg"),
    name: "GSN Justification",
  },
  gsnStrategy: {
    svg: require("./notasi/GSN/Strategy.svg"),
    name: "GSN Strategy",
  },
  gsnSolution: {
    svg: require("./notasi/GSN/Solution.svg"),
    name: "GSN Solution",
  },
  gsnAwayGoal: {
    svg: require("./notasi/GSN/AwayGoal.svg"),
    name: "GSN Away Goal",
  },
  gsnAwayContext: {
    svg: require("./notasi/GSN/AwayContext.svg"),
    name: "GSN Away Context",
  },
  gsnAwaySolution: {
    svg: require("./notasi/GSN/AwaySolution.svg"),
    name: "GSN Away Solution",
  },
  gsnAwayAssumption: {
    svg: require("./notasi/GSN/AwayAssumption.svg"),
    name: "GSN Away Assumption",
  },
  gsnAwayJustification: {
    svg: require("./notasi/GSN/AwayJustification.svg"),
    name: "GSN Away Justification",
  },
  gsnContract: {
    svg: require("./notasi/GSN/ContractModule.svg"),
    name: "GSN Contract",
  },
  gsnModule: {
    svg: require("./notasi/GSN/Module.svg"),
    name: "GSN Module",
  },
  spc2: {
    svg: require("./notasi/nullnote.svg"),
    name: "",
  },
  spc3: {
    svg: require("./notasi/nullnote.svg"),
    name: "",
  },
  nullnote2: {
    svg: require("./notasi/nullnote.svg"),
    name: "CAE NOTATION",
  },
  caeClaim: {
    svg: require("./notasi/CAE/Claim.svg"),
    name: "CAE Claim",
  },
  caeArgument: {
    svg: require("./notasi/CAE/Argument.svg"),
    name: "CAE Argument",
  },
  caeEvidence: {
    svg: require("./notasi/CAE/Evidence.svg"),
    name: "CAE Evidence",
  },
};
// const navigate = useNavigate();

// generate node content
Object.entries(nodeDict).forEach(([key, dict]) => {
  const content = new mf.Diagramming.SvgContent();

  content.parse(dict.svg.default);
  dict.content = content;
});

const CAE_GSN = (content) => {
  const index = Object.values(nodeDict).findIndex(
    (dict) => dict.content == content
  );
  if (index < 0) {
    throw new Error("No content");
  }
  const type = Object.keys(nodeDict)[index];

  const targetType = ((a) => {
    switch (a) {
      case "abstract":
        return "ascited";
      case "ascited":
        return "abstract";
      case "caeArgument":
        return "gsnStrategy";
      case "caeClaim":
        return "gsnGoal";
      case "gsnGoal":
        return "caeClaim";
      case "gsnStrategy":
        return "caeArgument";
      case "caeEvidence":
        return "gsnSolution";
      case "gsnSolution":
        return "caeEvidence";
      case "gsnAssumption":
        return "nullnote";
      case "gsnContext":
        return "nullnote";
      case "gsnJustification":
        return "nullnote";
    }
  })(type);

  const targetNode = nodeDict[targetType];
  if (!targetNode) {
    console.log("can't translate");
  } else {
    return targetNode.content;
  }
};

const CAE_SACM = (content) => {
  const index = Object.values(nodeDict).findIndex(
    (dict) => dict.content == content
  );
  if (index < 0) {
    throw new Error("No content");
  }
  const type = Object.keys(nodeDict)[index];

  const targetType = ((a) => {
    switch (a) {
      // case "abstract":
      //   return "ascited";
      // case "ascited":
      //   return "abstract";
      case "caeArgument":
        return "argumentreasoning";
      case "argumentreasoning":
        return "caeArgument";
      case "caeClaim":
        return "sacmClaim";
      case "sacmClaim":
        return "caeClaim";
      case "caeEvidence":
        return "artifactreference";
      case "artifactreference":
        return "caeEvidence";
      case "abstract":
        return "nullnote";
      case "ascited":
        return "nullnote";
      case "sacmAssumed":
        return "nullnote";
      case "axiomatic":
        return "nullnote";
      case "defeated":
        return "nullnote";
      case "needsupport":
        return "nullnote";
      case "ArgumentPackage":
        return "nullnote";
      case "ArgumentPackageBinding":
        return "nullnote";
      case "ArgumentPackageInterface":
        return "nullnote";
    }
  })(type);

  const targetNode = nodeDict[targetType];
  if (!targetNode) {
    console.log("can't translate");
  } else {
    return targetNode.content;
  }
};

const GSN_SACM = (content) => {
  const index = Object.values(nodeDict).findIndex(
    (dict) => dict.content == content
  );
  if (index < 0) {
    throw new Error("No content");
  }
  const type = Object.keys(nodeDict)[index];

  const targetType = ((a) => {
    switch (a) {
      case "gsnGoal":
        return "sacmClaim";
      case "sacmClaim":
        return "gsnGoal";
      case "sacmAssumed":
        return "gsnAssumption";
      case "gsnAssumption":
        return "sacmAssumed";
      case "gsnJustification":
        return "axiomatic";
      case "axiomatic":
        return "gsnJustification";
      // case "sacmClaim":
      //   return "gsnJustification";
      case "gsnContext":
        return "artifactreference";
      case "artifactreference":
        return "gsnContext";

      case "gsnStrategy":
        return "argumentreasoning";
      case "argumentreasoning":
        return "gsnStrategy";
      case "ArgumentPackage":
        return "gsnModule";
      case "gsnModule":
        return "ArgumentPackage";
      case "ArgumentPackageBinding":
        return "gsnContract";
      case "gsnContract":
        return "ArgumentPackageBinding";
      case "ArgumentPackageBinding":
        return "gsnContract";
      case "ArgumentPackageInterface":
        return "nullnote";
      case "abstract":
        return "nullnote";

      // case "sacmAssumed":
      //   return "nullnote";
      // case "axiomatic":
      //   return "nullnote";
      case "defeated":
        return "nullnote";
      case "needsupport":
        return "nullnote";
      case "gsnSolution":
        return "artifactreference";
      case "artifactreference":
        return "gsnSolution";
      case "gsnAwayGoal":
        return "ascited";
      case "ascited":
        return "gsnAwayGoal";
      case "gsnAwayJustification":
        return "AsCitedAxiomatic";
      case "AsCitedAxiomatic":
        return "gsnAwayJustification";
      case "gsnAwayAssumption":
        return "AsCitedAssumed";
      case "AsCitedAssumed":
        return "gsnAwayAssumption";
      case "gsnAwayContext":
        return "AsCitedReference";
      case "gsnAwaySolution":
        return "AsCitedReference";
      case "AsCitedReference":
        return "gsnAwaySolution";
    }
  })(type);

  const targetNode = nodeDict[targetType];
  if (!targetNode) {
    console.log("can't translate");
  } else {
    // consol?e.log(targetNode.content);
    return targetNode.content;
  }
};
const GSN_SACM1 = (content) => {
  // console.log("gsnsacm1");
  const index = Object.values(nodeDict).findIndex(
    (dict) => dict.content == content
  );
  if (index < 0) {
    throw new Error("No content");
  }
  const type = Object.keys(nodeDict)[index];

  const targetType = ((a) => {
    switch (a) {
      case "sacmAssumed":
        return "gsnAssumption";
      case "gsnAssumption":
        return "sacmAssumed";
      case "gsnSolution":
        return "artifactreference";
      case "artifactreference":
        return "gsnSolution";
      case "AsCitedReference":
        return "gsnAwayContext";
    }
  })(type);

  const targetNode = nodeDict[targetType];
  if (!targetNode) {
    console.log("can't translate");
  } else {
    return targetNode.content;
  }
};

const CaeToSacm = (props) => {
  const navigate = useNavigate();

  class CaeToSacm extends Component {
    // const navigate = useNavigate();

    constructor(props) {
      super(props);
      var idNum = 0;
      var Size = new mf.Drawing.Size(49, 23);
      // var NodeListView = new mf.Diagramming.NodeListView();
      // NodeListView.set;
      console.log(Size);
      // diagram.font = new Font("Roboto", 10);
      // NodeListView.setdefaultNodeSize(Size);
      var diagram = new mf.Diagramming.Diagram();
      diagram.setAllowInplaceEdit(true);
      diagram.allowUnconnectedLinks = true;
      var pattern = new mf.Diagramming.AnchorPattern([
        new mf.Diagramming.AnchorPoint(50, 0, true, true),
        new mf.Diagramming.AnchorPoint(100, 50, true, true),
        new mf.Diagramming.AnchorPoint(50, 100, true, true),
        new mf.Diagramming.AnchorPoint(0, 50, true, true),
      ]);

      // diagram.InplaceEditAcceptOnEnter(true);
      // diagram.setLicenseLocation("./diagram_lic.txt");
      diagram.setDefaultShape("Rectangle");
      diagram.invalidate();

      // LINK SHAPE SETUP
      diagram.setLinkShape(mf.Diagramming.LinkShape.Polyline);
      // KALAU MAU LURUS AJA DI SET FALSE
      // diagram.setRouteLinks(true);

      // diagram.setTheme(mf.Diagramming.Theme.getBusiness());

      var shapeIds = [];
      var shapeNodes = [];
      var arrowHeadNodes = [];
      var arrowHeadIds = [
        "Arrow",
        "Triangle",
        "Circle",
        "Tetragon",
        "Rhombus",
        "BowArrow",
        "PointerArrow",
        "Pentagon",
        "Reversed",
        "RevTriangle",
        "Quill",
        "RevWithLine",
        "RevWithCirc",
        "BackSlash",
        "Slash",
        "DefaultFlow",
        "DoubleArrow",
      ];

      Object.values(nodeDict).forEach((dict) => {
        var node = new mf.Diagramming.SvgNode();
        var i = 0;
        var char = i;

        node.setContent(dict.content);
        node.setImageAlign(mf.Diagramming.ImageAlign.Fit);
        node.image.svg = false;
        node.image.image.width = node.image.image.naturalWidth;
        node.image.image.height = node.image.image.naturalHeight;
        node.brush = "white";
        node.setTransparent(true);
        shapeNodes.push(node);
        shapeIds.push(dict.name);
        node.setAnchorPattern(pattern);
        i += 1;
        // console.log(node);
      });

      for (var arrowHeadId of arrowHeadIds) {
        var arrowHead = new mf.Diagramming.ShapeNode(diagram);
        arrowHead.setShape(arrowHeadId);
        arrowHeadNodes.push(arrowHead);
      }

      this.state = {
        diagram: diagram,
        nodes: shapeNodes,
        captions: shapeIds,
        linkNodes: arrowHeadNodes,
        linkIds: arrowHeadIds,
        behavior: mf.Diagramming.Behavior.LinkShapes,
      };
    }
    nodeSize(node) {
      // var node = args.getNode();
      console.log("node created");
      var bound = node.getBounds();
      var noda = node.content.fileName;
      if (noda == "/static/media/Claim.0d97347d.svg") {
        bound.height = 34.6875;
        bound.width = 53.82499999999999;
        node.text.text = "C" + Claim;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 4;
        Claim++;
      } else if (noda == "/static/media/Argument.e03e93c3.svg") {
        bound.height = 28.171875;
        bound.width = 55.59791666666666;
        node.text.text = "A" + Argument;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        Argument++;
      } else if (noda == "/static/media/Evidence.1fc95cb7.svg") {
        bound.height = 28.171875;
        bound.width = 55.59791666666666;
        node.text.text = "E" + Reference;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        Reference++;
      } else if (noda == "/static/media/Claim.65db5c64.svg") {
        bound.height = 32.31041666666667;
        bound.width = 58.12291666666667;
        node.text.text = "C" + Claim;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        Claim++;
      } else if (noda == "/static/media/Argument.e03e93c3.svg") {
        bound.height = 28.171875;
        bound.width = 55.59791666666666;
        node.text.text = "A" + Argument;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        Argument++;
      } else if (noda == "/static/media/Evidence.1fc95cb7.svg") {
        bound.height = 28.171875;
        bound.width = 55.59791666666666;
        node.text.text = "E" + Reference;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        Reference++;
      } else if (noda == "/static/media/Justification.f2205236.svg") {
        bound.height = 34.6875;
        bound.width = 52.43124999999998;
        node.text.text = "J" + Justification;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 4;
        Justification++;
      } else if (noda == "/static/media/Assumption.f2205236.svg") {
        bound.height = 34.6875;
        bound.width = 52.43124999999998;
        node.text.text = "A" + Assumption;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 4;
        Assumption++;
      } else if (noda == "/static/media/ArgumentReasoning.d99943df.svg") {
        bound.height = 22.78645833333333;
        bound.width = 53.37708333333333;
        // bound.height = 29.586458333333326;
        // bound.width = 53.39583333333334;
        node.text.text = "A" + Argument;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 5;
        Argument++;
        // 22.78645833333333
        // 24
      } else if (noda == "/static/media/ArtifactReference.ebdffe5f.svg") {
        bound.height = 40;
        bound.width = 30;
        node.text.text = "Ar" + Reference;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 10;
        node.text.padding.left = bound.width / 20;
        Reference++;
      }
      // FOR ARGUMENT PACKAGE
      // 34.369791666666664
      // 63.75416666666666
      // 22.78645833333333
      // 24
      node.setBounds(bound);
    }

    onSelectChange(event) {
      console.log("Before value set " + this.state.behavior);
      console.log(event.target.value);
      this.setState({
        behavior: +event.target.value,
      });
      if (event.target.value == 4) {
        this.state.diagram.setLinkShape(mf.Diagramming.LinkShape.Bezier);
        // KALAU MAU LURUS AJA DI SET FALSE
        this.state.diagram.setRouteLinks(true);
      } else if (event.target.value == 3.1) {
        this.state.diagram.setLinkShape(mf.Diagramming.LinkShape.Polyline);
        // KALAU MAU LURUS AJA DI SET FALSE
        this.state.diagram.setRouteLinks(false);
      } else if (event.target.value == 4.1) {
        this.state.diagram.setLinkShape(mf.Diagramming.LinkShape.Bezier);
        // KALAU MAU LURUS AJA DI SET FALSE
        this.state.diagram.setRouteLinks(true);
      } else if (event.target.value == 4.2 || event.target.value == 4.4) {
        this.state.diagram.setLinkShape(mf.Diagramming.LinkShape.Cascading);
        // KALAU MAU LURUS AJA DI SET FALSE
        this.state.diagram.setRouteLinks(true);
      } else if (event.target.value == 4.12) {
        this.state.diagram.setLinkShape(mf.Diagramming.LinkShape.Cascading);
        // KALAU MAU LURUS AJA DI SET FALSE
        this.state.diagram.setRouteLinks(true);
      } else {
        this.state.diagram.setLinkShape(mf.Diagramming.LinkShape.Polyline);
        // KALAU MAU LURUS AJA DI SET FALSE
        this.state.diagram.setRouteLinks(false);
      }
      console.log("After value set " + this.state.behavior);
    }

    CAELink(sender, args) {
      var shape = mf.Diagramming.Shape.fromId("Triangle");
      // var linkShape = mf.Diagramming.LinkShape.Bezier;
      // var shape = "";
      // args.link.shape = linkShape;
      var origin = args.getLink().getOrigin().content.fileName;
      console.log(shape);
      console.log(shape);
      // var lab = "";
      // var label = args.link.addLabel(lab);
      // // label.brush = "white";
      // var Font = mf.Drawing.Font;

      // label.font = new Font("Roboto", 5);
      // label.horizontalAlign = mf.Diagramming.Alignment.Center;
      // label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "black";
      if (origin == "/static/media/Solution.537801ea.svg") {
        console.log("kiw");
        this.state.diagram.removeItem(args.getLink());
      }

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;
    }

    SupportedBy(sender, args) {
      var shape = mf.Diagramming.Shape.fromId("Triangle");
      // var linkShape = mf.Diagramming.LinkShape.Bezier;
      // var shape = "";
      // args.link.shape = linkShape;
      var origin = args.getLink().getOrigin().content.fileName;
      console.log(shape);
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "black";
      if (origin == "/static/media/Solution.537801ea.svg") {
        console.log("kiw");
        this.state.diagram.removeItem(args.getLink());
      }

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;
    }

    InContextOf(sender, args) {
      var shape = mf.Diagramming.Shape.fromId("Triangle");
      var brush = mf.Drawing.Brush;
      // brush.setheadBrush("black");
      console.log(shape);
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "white";
    }

    AssertedInference(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      // var shape = "";
      var shape = mf.Diagramming.Shape.fromId("Triangle");
      var brush = mf.Drawing.Brush;
      // brush.setheadBrush("black");

      console.log(shape);
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "black";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      console.log(shape);
      var lab = "";
      var label = args.link.addLabel(lab);
      // label.brush = "white";
      var titik = args.getLink().points.length;
      var mid = titik - 2;
      console.log(mid);
      label.setControlPointPosition(mid, 0, 0);
      var Font = mf.Drawing.Font;

      label.font = new Font("Roboto", 5);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
    }

    AssertedEvidence(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";
      var shape = mf.Diagramming.Shape.fromId("Triangle");
      var brush = mf.Drawing.Brush;
      // brush.setheadBrush("black");
      console.log(shape);
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "black";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      console.log(shape);
      var lab = "";
      var label = args.link.addLabel(lab);
      // label.brush = "white";
      var Font = mf.Drawing.Font;

      label.font = new Font("Roboto", 5);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
    }

    AssertedContex(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";
      var shape = mf.Diagramming.Shape.fromId("Rectangle");
      var brush = mf.Drawing.Brush;
      // brush.setheadBrush("black");
      console.log(shape);
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "black";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      console.log(shape);
      var lab = "";
      var label = args.link.addLabel(lab);
      // label.brush = "white";
      var Font = mf.Drawing.Font;
      var titik = args.getLink().points.length;
      var mid = titik - 2;
      console.log(mid);
      label.setControlPointPosition(mid, 0, 0);
      label.font = new Font("Roboto", 5);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
    }
    AssertedContexToLink(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";
      // var shape = mf.Diagramming.Shape.fromId("Rectangle");
      var brush = mf.Drawing.Brush;
      // brush.setheadBrush("black");
      console.log(shape);
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "black";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      console.log(shape);
      var lab = "\u25A0";
      var label = args.link.addLabel(lab);
      // label.brush = "white";
      var Font = mf.Drawing.Font;

      label.font = new Font("Roboto", 5);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
    }

    Defeated(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      console.log(shape);
      var lab = "\u2715";
      var label = args.link.addLabel(lab);
      // label.brush = "white";
      var Font = mf.Drawing.Font;

      label.font = new Font("Roboto", 10);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
    }

    Axiomatic(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      console.log(shape);
      var lab = "\u007C";
      var label = args.link.addLabel(lab);
      // label.brush = "white";
      var Font = mf.Drawing.Font;

      label.font = new Font("Roboto", 10);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
    }

    NeedsSupport(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      console.log(shape);
      var lab = "\u22C5 \u22C5 \u22C5";
      var label = args.link.addLabel(lab);
      label.brush = "white";
      var Font = mf.Drawing.Font;

      label.font = new Font("Roboto", 10);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
    }

    Assumed(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      console.log(shape);
      var lab = "\u007C    \u007C";
      var label = args.link.addLabel(lab);
      label.brush = "white";
      var Font = mf.Drawing.Font;

      label.font = new Font("Roboto", 10);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
    }

    Abstract(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";

      var DashStyle = mf.Drawing.DashStyle.Dash;
      args.getLink().strokeDashStyle = DashStyle;

      console.log(shape);
      var lab = "";
      var label = args.link.addLabel(lab);
      // label.brush = "white";
      var Font = mf.Drawing.Font;
      args.getLink().setHeadShape(shape);
      label.font = new Font("Roboto", 5);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
    }

    AsCited(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      console.log(shape);
      var lab = "\u22A1";
      var label = args.link.addLabel(lab);
      label.brush = "white";
      var Font = mf.Drawing.Font;
      args.getLink().setHeadShape(shape);
      label.font = new Font("Roboto", 10);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
    }

    InContextOf(sender, args) {
      // change the arrowhead shape
      // var link = this.state.diagram.links;
      // link.forEach((link) => {
      // link.label = "\u25AD";
      // console.log(link.label);
      // var headShape = mf.Diagramming.Shape.fromId("Arrow");
      // this.state.diagram.setLinkHeadShape(headShape);
      // link.horihorizontalAlign = mf.Diagramming.Alignment.Center;
      var shape = mf.Diagramming.Shape.fromId("Triangle");
      var brush = mf.Drawing.Brush;
      // brush.setheadBrush("black");
      console.log(shape);
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "white";
      // n.brush = "black";
      // console.log(n);
      // });
      // console.log(args.link.label);
      // add the box
      // var lab = "\u25AD";
      // link.addLabel(lab);

      // var lab = "U+25AD";
      // var label = args.link.addLabel(lab);
      // label.brush = "white";
      // label.size = 10;
      // var Font = mf.Drawing.Font;

      // label.font = new Font("Roboto", 10);
      // // uncomment the below line to 'hide' the dots
      // //label.textColor = "#c0c0c0";
      // label.horizontalAlign = mf.Diagramming.Alignment.Center;
      // label.verticalAlign = mf.Diagramming.Alignment.Center;
    }
    render() {
      var props = {
        id: "diagram1",
        backBrush: "white",
        behavior: this.state.behavior,
      };
      const nodeSize = (node) => {
        // var node = args.getNode();
        var bound = node.getBounds();
        var noda = node.content.fileName;
        if (noda == "/static/media/Claim.0d97347d.svg") {
          bound.height = 34.6875;
          bound.width = 53.82499999999999;
          var al = node.getText();
          var al = al.replace("C", "C");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 4;
        } else if (noda == "/static/media/Argument.e03e93c3.svg") {
          bound.height = 28.171875;
          bound.width = 55.59791666666666;
          var al = node.getText();
          var al = al.replace("A", "A");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 18;
          node.text.padding.left = bound.width / 20;
        } else if (noda == "/static/media/Evidence.1fc95cb7.svg") {
          bound.height = 28.171875;
          bound.width = 55.59791666666666;
          var al = node.getText();
          var al = al.replace("Ar", "E");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 18;
          node.text.padding.left = bound.width / 20;
        } else if (noda == "/static/media/Claim.65db5c64.svg") {
          bound.height = 32.31041666666667;
          bound.width = 58.12291666666667;
          var al = node.getText();
          var al = al.replace("C", "C");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 18;
          node.text.padding.left = bound.width / 20;
          // Claim++;
        } else if (noda == "/static/media/Argument.e03e93c3.svg") {
          bound.height = 28.171875;
          bound.width = 55.59791666666666;
          var al = node.getText();
          var al = al.replace("A", "A");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 18;
          node.text.padding.left = bound.width / 20;
          // Argument++;
        } else if (noda == "/static/media/Evidence.1fc95cb7.svg") {
          bound.height = 28.171875;
          bound.width = 55.59791666666666;
          node.text.text = "E" + Reference;
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 18;
          node.text.padding.left = bound.width / 20;
          // Reference++;
        } else if (noda == "/static/media/Justification.f2205236.svg") {
          bound.height = 34.6875;
          bound.width = 52.43124999999998;
          node.text.text = "J" + Justification;
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 4;
          // Justification++;
        } else if (noda == "/static/media/Assumption.f2205236.svg") {
          bound.height = 34.6875;
          bound.width = 52.43124999999998;
          var al = node.getText();
          var al = al.replace("C", "A");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 4;
          // Assumption++;
        } else if (noda == "/static/media/ArgumentReasoning.d99943df.svg") {
          bound.height = 22.78645833333333;
          bound.width = 53.37708333333333;
          // bound.height = 29.586458333333326;
          // bound.width = 53.39583333333334;
          var al = node.getText();
          var al = al.replace("A", "A");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 5;
          // Argument++;
          // 22.78645833333333
          // 24
        } else if (noda == "/static/media/ArtifactReference.ebdffe5f.svg") {
          bound.height = 40;
          bound.width = 30;
          var al = node.getText();
          var al = al.replace("E", "Ar");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 10;
          node.text.padding.left = bound.width / 20;
          // Reference++;
        }
        // if (noda == "/static/media/Goal.ce4d68d3.svg") {
        //   bound.height = 28.171875;
        //   bound.width = 43.75208333333333;
        //   var al = node.getText();
        //   var al = al.replace("C", "G");
        //   node.setText(al);
        //   node.text.lineAlignment = 0;
        //   node.text.textAlignment = 0;
        //   node.text.padding.top = 4;
        //   node.text.padding.left = 2;
        // } else if (noda == "/static/media/Context.f6f439fc.svg") {
        //   bound.height = 24.75208333333333;
        //   bound.width = 44;
        // } else if (noda == "/static/media/Solution.537801ea.svg") {
        //   bound.height = 31;
        //   bound.width = 31;
        // } else if (noda == "/static/media/Strategy.be4bdf22.svg") {
        //   bound.height = 24.66979166666667;
        //   bound.width = 49.6375;
        // } else if (noda == "/static/media/Claim.0d97347d.svg") {
        //   bound.height = 28.171875;
        //   bound.width = 43.75208333333333;
        //   var al = node.getText();
        //   var al = al.replace("G", "C");
        //   node.setText(al);
        //   // node.text.text = "C" + Claim;
        //   node.text.lineAlignment = 0;
        //   node.text.textAlignment = 0;
        //   node.text.padding.top = 3;
        //   node.text.padding.left = 8;
        //   // Claim++;
        // } else if (noda == "/static/media/Justification.f2205236.svg") {
        //   bound.height = 28.171875;
        //   bound.width = 43.75208333333333;
        // } else if (noda == "/static/media/Assumption.f2205236.svg") {
        //   bound.height = 28.171875;
        //   bound.width = 43.75208333333333;
        // } else if (noda == "/static/media/ArgumentReasoning.d99943df.svg") {
        //   bound.height = 22.78645833333333;
        //   bound.width = 24;
        //   // 22.78645833333333
        //   // 24
        // } else {
        //   bound.height = 24.75208333333333;
        //   bound.width = 48;
        // }
        return bound;
      };
      // FUntion for validating graph
      function getMessage(text) {
        if (text == "adaaad") {
          // var links = [...this.state.diagram.links];
          // links.forEach((link) => {
          //   var origin = link.getOrigin();
          //   console.log(origin.getBounds());
          // });
          return true;
        }
      }
      const detail = () => {
        const Nodes = [];

        var nodes = [...this.state.diagram.nodes];
        var links = [...this.state.diagram.links];
        // this.state.diagram.clearAll();
        nodes.forEach((node) => {
          // var al = node.getText();
          // this.state.diagram.removeItem(node);
          // console.log(node.getBounds());
          console.log(node.content.fileName);
        });
        // this.state.diagram.clearAll();
        // for (var i = nodes.length - 1; i >= 0; i--) {
        //   this.state.diagram.removeItem(nodes[i]);
        //   console.log("node deleted");
        // }
        console.log(nodes);
        links.forEach((link) => {});
        // console.log(nodes.content.fileName);
      };

      const ValidateCAE = () => {
        var a = 0;
        console.log("masuk validasi");
        try {
          // console.log(this.state.diagram);
          var nodes = [...this.state.diagram.nodes];
          const links = [...this.state.diagram.links];
          console.log(nodes);
          links.forEach((link) => {
            const origin = link.getOrigin();
            const destination = link.getDestination();

            const originIndex = nodes.findIndex((node) => node === origin);
            const destinationIndex = nodes.findIndex(
              (node) => node === destination
            );
            // links.forEach((link) => {
            //
            if (destination.bounds.y > origin.bounds.y) {
              nodes.forEach((node) => {
                this.state.diagram.removeItem(node);
                // nodes = [this.state.diagram.nodes];
              });
              a = 1;
            }
            if (origin.content.fileName == "/static/media/Claim.0d97347d.svg") {
              if (
                destination.content.fileName ==
                "/static/media/Claim.0d97347d.svg"
              ) {
                if (originIndex < destinationIndex) {
                  nodes.forEach((node) => {
                    this.state.diagram.removeItem(node);
                  });
                  a = 1;
                }
              }

              // this.state.diagram.removeItem(nodes);
            } else if (
              origin.content.fileName == "/static/media/Argument.e03e93c3.svg"
            ) {
              // console.log("masuk");
              if (
                destination.content.fileName ==
                "/static/media/Evidence.1fc95cb7.svg"
              ) {
                nodes.forEach((node) => {
                  this.state.diagram.removeItem(node);
                });
                a = 1;
              }
            }
            // console.log(link.shape);
          });
          nodes = [...this.state.diagram.nodes];
          // return a;
          console.log(nodes);
        } catch (error) {
          console.log(error);
        }
        return nodes;
      };

      const CAEToSACM = () => {
        try {
          const nodes = [...this.state.diagram.nodes];
          const links = [...this.state.diagram.links];
          // var d = 0;
          var destIndex = 0;
          var orgIndex = 0;
          // buat nodes baru dulu
          const newNodes = [];
          nodes.forEach((node) => {
            // console.log("this");
            const newNode = new mf.Diagramming.SvgNode(this.state.diagram);
            // console.log(node.content.fileName);

            // atur posisi dan ukuran node yg baru sesuai yg sekarang.
            const bound = node.getBounds();
            newNode.setBounds(bound);

            // [TODO] pastikan kontennya sesuai
            var pattern = new mf.Diagramming.AnchorPattern([
              new mf.Diagramming.AnchorPoint(50, 0, true, true),
              new mf.Diagramming.AnchorPoint(100, 50, true, true),
              new mf.Diagramming.AnchorPoint(50, 100, true, true),
              new mf.Diagramming.AnchorPoint(0, 50, true, true),
            ]);
            newNode.setAnchorPattern(pattern);

            newNode.setTransparent(true);
            newNode.setContent(CAE_SACM(node.content));
            newNode.setImageAlign(mf.Diagramming.ImageAlign.Fit);
            newNode.image.svg = false;
            newNode.image.image.width = newNode.image.image.naturalWidth;
            newNode.image.image.height = newNode.image.image.naturalHeight;
            try {
              newNode.setText(node.text.text);
              newNode.setTextColor(node.text.pen);
              newNode.setTransparent(true);
            } catch (error) {
              console.log("jir kaga bisa");
            }
            // nodes.forEach((node) => {});
            newNode.setBounds(nodeSize(newNode));

            this.state.diagram.addItem(newNode);

            newNodes.push(newNode);
          });
          // CAESACMAnchor();
          // links.forEach((link) => {
          //   console.log(link.destination.content.fileName);
          // });
          // update link node lama ke node baru
          links.forEach((link) => {
            console.log("here");

            // console.log(link.shape);
            console.log(link.getOriginAnchor());
            var d = 0;
            const origin = link.getOrigin();
            const destination = link.getDestination();
            var a = 0;

            const originIndex = nodes.findIndex((node) => node === origin);
            const destinationIndex = nodes.findIndex(
              (node) => node === destination
            );

            // links.forEach((link) => {
            //
            link.setOriginAnchor(0);

            if (
              link.destination.content.fileName ==
                "/static/media/nullnote.ce130ede.svg" ||
              link.origin.content.fileName ==
                "/static/media/nullnote.ce130ede.svg"
            ) {
              this.state.diagram.removeItem(link);
            }
            // "/static/media/Claim.0d97347d.svg" "/static/media/Argument.e03e93c3.svg" "/static/media/Evidence.1fc95cb7.svg"
            if (
              destination.content.fileName == "/static/media/Claim.0d97347d.svg"
            ) {
              // link.setOriginAnchor(0);

              link.setOriginAnchor(0);

              if (
                origin.content.fileName == "/static/media/Argument.e03e93c3.svg"
              ) {
                destIndex = destinationIndex;
                // orgIndex = originIndex;
                var batas = destination.bounds.x + 20;
                var bou = origin.getBounds();
                if (batas >= bou.x) {
                  bou.x += 65;
                  origin.setBounds(bou);
                }
                link.setOriginAnchor(3);
                // d = 1;

                // console.log(link.getOriginAnchor());
                a = 1;
              } else if (
                origin.content.fileName == "/static/media/Evidence.1fc95cb7.svg"
              ) {
                link.setOriginAnchor(0);

                a = 1;
              } else if (
                origin.content.fileName == "/static/media/Claim.0d97347d.svg"
              ) {
                link.setOriginAnchor(0);

                a = 1;
              }
            } else if (
              destination.content.fileName ==
                "/static/media/Argument.e03e93c3.svg" &&
              origin.content.fileName == "/static/media/Claim.0d97347d.svg"
            ) {
              d = 1;
              a = 1;
            } else if (
              destination.content.fileName ==
                "/static/media/Argument.e03e93c3.svg" &&
              origin.content.fileName == "/static/media/Evidence.1fc95cb7.svg"
            ) {
              link.setOriginAnchor(0);

              a = 1;
            } else if (
              origin.content.fileName ==
              "/static/media/ArtifactReference.ebdffe5f.svg"
            ) {
              console.log("im here");
              // d = 2;
              a = 2;
            } else if (
              destination.content.fileName == "/static/media/Claim.65db5c64.svg"
            ) {
              if (
                origin.content.fileName ==
                "/static/media/ArgumentReasoning.d99943df.svg"
              ) {
                console.log("org");
                orgIndex = originIndex;
                var bou = origin.getBounds();
                if (batas >= bou.x) {
                  bou.x -= 65;
                  origin.setBounds(bou);
                }

                // link.setOriginAnchor(0);
                a = 2;
              } else if (
                origin.content.fileName == "/static/media/Claim.65db5c64.svg"
              ) {
                // if (link.headShape.id == "Rectangle") {
                // }
                // link.setOriginAnchor(0);
                console.log("masuk sini");
                d = 2;
                a = 2;
              }
              // } else if (
              //   origin.content.fileName == "/static/media/Claim.65db5c64.svg"
              // ) {
              //   // link.setOriginAnchor(0);

              //   a = 2;
              // }
            }
            if (a == 1) {
              var shape = mf.Diagramming.Shape.fromId("Triangle");
              link.setHeadShape(shape);
              link.brush = "black";
              link.setShape(mf.Diagramming.LinkShape.Cascading);
              // var label = link.labels;

              // link.removeLabel(label[0]);
              // link.autoRoute = true;
              link.headShapeSize = 4;
              // var label = link.addLabel("");
              // label.horizontalAlign = mf.Diagramming.Alignment.Center;
              // label.verticalAlign = mf.Diagramming.Alignment.Center;
              // label.brush = "white";
              var titik = link.points.length;
              var mid = titik - 1;
              console.log(mid);
              link.setSegmentCount(3);

              // label.setControlPointPosition(mid, 0, 0);
              var Font = mf.Drawing.Font;
              link.autoRoute = true;

              link.route();

              // label.font = new Font("Roboto", 10);
            } else if (a == 2) {
              link.headShapeSize = 4;

              var label = link.labels;
              // link.removeLabel(label[0]);
              var shape = mf.Diagramming.Shape.fromId("Triangle");
              link.setHeadShape(shape);
              link.brush = "black";
              link.setShape(mf.Diagramming.LinkShape.Polyline);
              link.autoRoute = false;
              link.setSegmentCount(1);
            }
            // });
            // console.log(link.shape);

            const state = {
              controlPoints: link.getControlPoints(),
              // originAnchor: link.getOriginAnchor(),
              destinationAnchor: link.getDestinationAnchor(),
              shape: link.getShape(),
              startPoint: link.getStartPoint(),
              endPoint: link.getEndPoint(),
            };

            // SET LINK SHAPE BUAT SACM
            // var label = link.addLabel("\u25AD");
            // label.horizontalAlign = mf.Diagramming.Alignment.Center;
            // label.verticalAlign = mf.Diagramming.Alignment.Center;
            // label.brush = "white";
            // var Font = mf.Drawing.Font;

            // label.font = new Font("Roboto", 10);
            // label.font = "sans-serif";
            // var a = link.getLabel();
            // console.log(label.text.font.size);
            // console.log(link.getDestination.content.fileName);
            // this.state.diagram.removeItem(link);
            if (d == 0) {
              link.setDestination(newNodes[destinationIndex]);
            } else if (d == 2) {
              // sacm ke cae dengan claim yang nunjuk argument

              link.setDestination(newNodes[orgIndex]);
            } else {
              // CAE ke SACM
              // claim yang nunjuk ke claim berdasarkan
              link.setDestination(newNodes[destIndex]);
            }
            // link.setDestination(newNodes[destIndex]);

            link.setOrigin(newNodes[originIndex]);

            link.setShape(state.shape);
            link.setEndPoint(state.endPoint);
            link.setStartPoint(state.startPoint);
            link.setDestinationAnchor(state.destinationAnchor);
            link.setControlPoints(state.controlPoints);
            console.log("cuy");
            console.log(orgIndex);
          });

          // tambahkan node baru dan hapus node lama
          newNodes.forEach((node) => {
            if (
              node.content.fileName == "/static/media/nullnote.ce130ede.svg"
            ) {
              // console.log(node);
              this.state.diagram.removeItem(node);
            }
          });
          nodes.forEach((node) => {
            this.state.diagram.removeItem(node);
          });

          // links.forEach((link, i) => {
          //   const state = linksState[i];
          //   link.setDestinationAnchor(state.destinationAnchor);
          //   // link.setOriginAnchor(state.originAnchor);
          //   link.setControlPoints(state.controlPoints);
          // });

          // links.forEach((link, i) => {});

          console.log(`Done!`);
        } catch (error) {
          console.log(error);
        }
        // var AbstractClaim = new mf.Diagramming.SvgNode(diagram);
        // AbstractClaim.setBounds(new cm.Drawing.Rect(25, 15, 60, 25));
        // var content = new mf.Diagramming.SvgContent();
        // content.parse(AbstractClaimSvg.default);
        // console.log(this.state.diagram);
        // const activeItem = this.state.diagram.activeItem;
        // this.setState((state) => ({
        //   ...state,
        //   diagram: {
        //     ...state.diagram,
        //     nodes: [activeItem],
        //   },
        // }));
        // console.log(AbstractClaim);
        // this.state.diagram.nodes.forEach((element, i, arr) => {
        //   console.log(typeof element);

        //   // arr[i] = this.state.diagram.activeItem;

        //   // if (
        //   //   element.content.fileName == "/static/media/AsCitedClaim.8dddc3f0.svg"
        //   // ) {
        //   //   this.setState((element) => ({
        //   //     ...element,
        //   //   }));
        //   // } else {
        //   //   console.log("false");
        //   // }
        // });
        // console.log(this.state.nodes.forEach);
      };
      return (
        <div className="container">
          <div className="sidebar-left">
            <NodeListView
              defaultNodeSize={new mf.Drawing.Size(48, 24.75208333333333)}
              style={{
                height: "800px",
                // width:''
              }}
              nodes={this.state.nodes}
              captions={this.state.captions}
            ></NodeListView>
          </div>
          <div className="main">
            <div className="topbar">
              <div>
                <select
                  className="item"
                  defaultValue="3"
                  onChange={this.onSelectChange.bind(this)}
                >
                  <option value="3.1">CAE Link</option>

                  <option value="4.2">SACM Asserted Inference</option>
                  <option value="4.3">SACM Asserted Evidence</option>
                  <option value="4.4">SACM Asserted Context</option>
                  <option value="4.5">SACM Defeated</option>
                  <option value="4.6">SACM Axiomatic</option>
                  <option value="4.7">SACM NeedsSupport</option>
                  <option value="4.8">SACM Assumed</option>
                  <option value="4.9">SACM Abstract</option>
                  <option value="4.11">SACM AsCited</option>
                  <option value="4.12">SACM Asserted Contex To Link</option>

                  <option value="3">LinkShapes</option>
                  <option value="10"> DrawContainer </option>
                  <option value="5"> DrawTable </option>
                  <option value="0"> Modify </option>
                  <option value="12"> Pan </option>
                </select>
              </div>
              <div>
                <button className="button" id="test button" onClick={CAEToSACM}>
                  CAE &#8596; SACM
                </button>

                <button className="button" id="test button" onClick={detail}>
                  Detail
                </button>
                <button
                  className="button"
                  id="test button"
                  onClick={ValidateCAE}
                >
                  Validate CAE
                </button>
                {/* <button
                  className="button"
                  id="test button"
                  onClick={ValidateGSN}
                >
                  Validate GSN
                </button> */}
                <button onClick={() => navigate("/GSNtoSACM")}>
                  GSNtoSACM
                </button>
                <button onClick={() => navigate(-1)}>Choose Language</button>
              </div>
            </div>
            <div className="diagram-area">
              <DiagramView
                diagram={this.state.diagram}
                {...props}
                onNodeCreated={(diagram, args) => {
                  var node = args.getNode(); //v3

                  this.nodeSize(node);

                  node.setImageAlign(mf.Diagramming.ImageAlign.Fit);
                  node.image.svg = false;
                  node.image.image.width = node.image.image.naturalWidth;
                  node.image.image.height = node.image.image.naturalHeight;

                  // }}
                }}
                // onNodeDeleted={}
                onNodeModified={(diagram, args) => {
                  console.log("wakwaaw");
                }}
                onLinkCreated={(sender, args) => {
                  var behave = this.state.behavior;
                  console.log("actual value " + behave);
                  if (behave == 4) {
                    this.SupportedBy(sender, args);
                  } else if (behave == 4.1) {
                    this.InContextOf(sender, args);
                  } else if (behave == 4.2) {
                    this.AssertedInference(sender, args);
                  } else if (behave == 4.3) {
                    this.AssertedEvidence(sender, args);
                  } else if (behave == 4.4) {
                    this.AssertedContex(sender, args);
                  } else if (behave == 4.5) {
                    this.Defeated(sender, args);
                  } else if (behave == 4.6) {
                    this.Axiomatic(sender, args);
                  } else if (behave == 4.7) {
                    this.NeedsSupport(sender, args);
                  } else if (behave == 4.8) {
                    this.Assumed(sender, args);
                  } else if (behave == 4.9) {
                    this.Abstract(sender, args);
                  } else if (behave == 4.11) {
                    this.AsCited(sender, args);
                  } else if (behave == 4.12) {
                    this.AssertedContexToLink(sender, args);
                  } else if (behave == 3.1) {
                    this.CAELink(sender, args);
                  } else {
                    console.log("hwaa");
                  }
                }}
                onLeaveInplaceEditMode={(item, node) => {
                  node.item.textColor = "black";
                }}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  return <CaeToSacm />;
};
export default CaeToSacm;
