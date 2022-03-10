import React, { Component } from "react";
import mf from "diagram-library";
import cm from "mindfusion-common";
import { DiagramView, NodeListView } from "diagram-library-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import "./Home.css";

var Claim = 1;
var Argument = 1;
var Evidence = 1;
var Reference = 1;
var Goal = 1;
var Justification = 1;
var Assumption = 1;
var Strategy = 1;
var Solution = 1;
var Context = 1;
var invalid = 0;
const nodeDict = {
  nullnote: {
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
  spc1: {
    svg: require("./notasi/nullnote.svg"),
    name: "",
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
    name: "GSN NOTATION",
  },
  gsnGoal: {
    svg: require("./notasi/GSN/Goal.svg"),
    name: "GSN Goal",
  },

  gsnStrategy: {
    svg: require("./notasi/GSN/Strategy.svg"),
    name: "GSN Strategy",
  },
  gsnSolution: {
    svg: require("./notasi/GSN/Solution.svg"),
    name: "GSN Solution",
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
  nullnote3: {
    svg: require("./notasi/nullnote.svg"),
    name: "SACM NOTATION",
  },
  sacmClaim: {
    svg: require("./notasi/SACM/Claim/Claim.svg"),
    name: "SACM Claim",
  },

  argumentreasoning: {
    svg: require("./notasi/SACM/ArgumentReasoning.svg"),
    name: "SACM Argument Reasoning ",
  },
  artifactreference: {
    svg: require("./notasi/SACM/ArtifactReference.svg"),
    name: "SACM Artifact Reference",
  },
  // artifactreference1: {
  //   svg: require("./notasi/SACM/ArtifactReference1.svg"),
  //   name: "Artifact Reference",
  // },
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
        console.log("Cannot translate GSN Assumption");
        return "nullnote";
      case "gsnContext":
        console.log("Cannot translate GSN Context");
        return "nullnote";
      case "gsnJustification":
        console.log("Cannot translate GSN Justification");
        return "nullnote";
      case "gsnAwayGoal":
        return "sacmClaim";
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

const Cae_Gsn = (props) => {
  const navigate = useNavigate();

  class Cae_Gsn extends Component {
    // const navigate = useNavigate();

    constructor(props) {
      super(props);
      var idNum = 0;
      var Size = new mf.Drawing.Size(49, 23);
      // var NodeListView = new mf.Diagramming.NodeListView();
      // NodeListView.set;
      // console.log(Size);
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
      var GsnNode = [];
      var GsnId = [];
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
        GsnNodes: GsnNode,
        GsnIds: GsnId,
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
      if (noda == "/static/media/Goal.ce4d68d3.svg") {
        bound.height = 28.171875;
        bound.width = 55.59791666666666;
        node.text.text = "G" + Goal;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        Goal++;
      } else if (noda == "/static/media/Context.f6f439fc.svg") {
        bound.height = 29.586458333333326;
        bound.width = 53.39583333333334;
        node.text.text = "C" + Context;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 5;
        Context++;
      } else if (noda == "/static/media/Solution.537801ea.svg") {
        bound.height = 39.74062500000002;
        bound.width = 39.74062500000002;
        node.text.text = "Sn" + Solution;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 4;
        Solution++;
      } else if (noda == "/static/media/Strategy.be4bdf22.svg") {
        bound.height = 26.081249999999997;
        bound.width = 56.75;
        node.text.text = "S" + Strategy;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 5;
        Strategy++;
      } else if (noda == "/static/media/Claim.0d97347d.svg") {
        bound.height = 33.48229166666667;
        bound.width = 52.99791666666667;
        node.text.text = "C" + Claim;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 4;
        Claim++;
      } else if (noda == "/static/media/Claim.65db5c64.svg") {
        bound.height = 28.171875;
        bound.width = 51.725;
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
      } else if (noda == "/static/media/Justification.c1b68ad4.svg") {
        bound.height = 38.01354166666667;
        bound.width = 52.43124999999998;
        node.text.text = "J" + Justification;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 4;
        Justification++;
      } else if (noda == "/static/media/Assumption.d31ca3ab.svg") {
        bound.height = 39.08125;
        bound.width = 56;
        node.text.text = "A" + Assumption;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 4;
        Assumption++;
      } else if (noda == "/static/media/ArgumentReasoning.d99943df.svg") {
        bound.height = 26.78645833333333;
        bound.width = 56;
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
      // 22.78645833333333
      // 24
      node.setBounds(bound);
    }

    onSelectChange(event) {
      // console.log("Before value set " + this.state.behavior);
      // console.log(event.target.value);
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
      // console.log("After value set " + this.state.behavior);
    }

    CAELink(sender, args) {
      var shape = mf.Diagramming.Shape.fromId("Triangle");
      // var linkShape = mf.Diagramming.LinkShape.Bezier;
      // var shape = "";
      // args.link.shape = linkShape;
      var origin = args.getLink().getOrigin().content.fileName;
      // console.log(shape);
      // console.log(shape);
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
      // console.log(shape);
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "black";
      if (origin == "/static/media/Solution.537801ea.svg") {
        // console.log("kiw");
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
    AssertedEvidence(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";
      var shape = mf.Diagramming.Shape.fromId("Triangle");
      var brush = mf.Drawing.Brush;
      // brush.setheadBrush("black");
      // console.log(shape);
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "black";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      // console.log(shape);
      var lab = "";
      var label = args.link.addLabel(lab);
      // label.brush = "white";
      var Font = mf.Drawing.Font;

      label.font = new Font("Roboto", 5);
      label.horizontalAlign = mf.Diagramming.Alignment.Center;
      label.verticalAlign = mf.Diagramming.Alignment.Center;
      args.getLink().brush = "black";
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
        var idNum = 1;
        var bound = node.getBounds();
        var noda = node.content.fileName;
        if (noda == "/static/media/Goal.ce4d68d3.svg") {
          bound.height = 28.171875;
          bound.width = 55.59791666666666;
          var al = node.getText();
          var al = al.replace("C", "G");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 18;
          node.text.padding.left = bound.width / 20;
          // Goal++;
        } else if (noda == "/static/media/Context.f6f439fc.svg") {
          bound.height = 29.586458333333326;
          bound.width = 53.39583333333334;
          var al = node.getText();
          var al = al.replace("Ar", "C");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 5;
          // Context++;
        } else if (noda == "/static/media/Solution.537801ea.svg") {
          bound.height = 39.74062500000002;
          bound.width = 39.74062500000002;
          var al = node.getText();
          var al = al.replace("Ar", "Sn");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 4;
          // Solution++;
        } else if (noda == "/static/media/Strategy.be4bdf22.svg") {
          bound.height = 33.08958333333334;
          bound.width = 62.92083333333335;
          node.text.text = "S" + Strategy;
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 5;
          // Strategy++; node.text.padding.left = bound.width / 5;
        } else if (noda == "/static/media/Claim.0d97347d.svg") {
          bound.height = 33.48229166666667;
          bound.width = 52.99791666666667;
          var al = node.getText();
          var al = al.replace("G", "C");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 4;
        } else if (noda == "/static/media/Argument.e03e93c3.svg") {
          bound.height = 28.171875;
          bound.width = 55.59791666666666;
          var al = node.getText();
          var al = al.replace("S", "A");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 18;
          node.text.padding.left = bound.width / 20;
        } else if (noda == "/static/media/Evidence.1fc95cb7.svg") {
          bound.height = 28.171875;
          bound.width = 55.59791666666666;
          var al = node.getText();
          var al = al.replace("Sn", "E");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 18;
          node.text.padding.left = bound.width / 20;
        } else if (noda == "/static/media/Justification.c1b68ad4.svg") {
          bound.height = 38.01354166666667;
          bound.width = 52.99791666666667;
          node.text.text = "J" + Justification;
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 4;
        } else if (noda == "/static/media/Assumption.d31ca3ab.svg") {
          bound.height = 38.01354166666667;
          bound.width = 52.99791666666667;
          node.text.text = "A" + Assumption;
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 4;
        } else if (noda == "/static/media/Claim.65db5c64.svg") {
          bound.height = 28.171875;
          bound.width = 51.725;
          node.text.text = "C" + Claim;
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 18;
          node.text.padding.left = bound.width / 20;
          // Claim++;
        } else if (noda == "/static/media/Argument.e03e93c3.svg") {
          bound.height = 28.171875;
          bound.width = 55.59791666666666;
          node.text.text = "A" + Argument;
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
        } else if (noda == "/static/media/Justification.c1b68ad4.svg") {
          bound.height = 38.01354166666667;
          bound.width = 52.43124999999998;
          node.text.text = "J" + Justification;
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 4;
          // Justification++;
        } else if (noda == "/static/media/Assumption.d31ca3ab.svg") {
          bound.height = 39.08125;
          bound.width = 56;
          var al = node.getText();
          var al = al.replace("C", "A");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = 3;
          node.text.padding.left = bound.width / 4;
          // Assumption++;
        } else if (noda == "/static/media/ArgumentReasoning.d99943df.svg") {
          bound.height = 26.78645833333333;
          bound.width = 56;
          // bound.height = 29.586458333333326;
          // bound.width = 53.39583333333334;
          var al = node.getText();
          var al = al.replace("S", "A");
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
          var al = al.replace("Sn", "Ar");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 10;
          node.text.padding.left = bound.width / 20;
          Reference++;
        } else if (noda == "/static/media/ArgumentPackage.cf92e47b.svg") {
          bound.height = 32;
          bound.width = 68;
          node.text.text = "AP";
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 7;
          node.text.padding.left = bound.width / 8;
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
        // } else if (noda == "/static/media/Justification.c1b68ad4.svg") {
        //   bound.height = 28.171875;
        //   bound.width = 43.75208333333333;
        // } else if (noda == "/static/media/Assumption.d31ca3ab.svg") {
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
        // const newNodes = [];

        var nodes = [...this.state.diagram.nodes];
        var links = [...this.state.diagram.links];

        // this.state.diagram.clearAll();
        // BUAT AWAY GOAL DAN KAWAN-KAWAN
        nodes.forEach((node) => {
          console.log(node.content.fileName);
          var content = new mf.Diagramming.SvgContent();
          content.parse("/static/media/Claim.65db5c64.svg");
          node.setContent(content);
          // node.setContent()
          console.log(content);
          const newNode = new mf.Diagramming.SvgNode(this.state.diagram);
          // console.log(node.content.fileName);

          // atur posisi dan ukuran node yg baru sesuai yg sekarang.
          const boundx = node.getBounds().x;
          const boundy = node.getBounds().y;

          // newNode.setBounds(bound);

          // [TODO] pastikan kontennya sesuai
          var pattern = new mf.Diagramming.AnchorPattern([
            new mf.Diagramming.AnchorPoint(50, 0, true, true),
            new mf.Diagramming.AnchorPoint(100, 50, true, true),
            new mf.Diagramming.AnchorPoint(50, 100, true, true),
            new mf.Diagramming.AnchorPoint(0, 50, true, true),
          ]);
          newNode.setAnchorPattern(pattern);
          // console.log(3);
          content.parse("/static/media/ArgumentPackage.cf92e47b.svg");
          newNode.setTransparent(true);
          newNode.setContent(content);
          newNode.setImageAlign(mf.Diagramming.ImageAlign.Fit);
          newNode.image.svg = false;
          newNode.image.image.width = newNode.image.image.naturalWidth;
          newNode.image.image.height = newNode.image.image.naturalHeight;
          try {
            newNode.setText(node.text.text);
            newNode.setTextColor(node.text.pen);
            newNode.setTransparent(true);
          } catch (error) {
            console.log(error);
          }
          // newNode.setBounds(nodeSize(newNode));
          // nodes.forEach((node) => {});
          // this.nodeSize(newNode);

          newNode.setBounds(nodeSize(newNode));
          newNode.getBounds().x = boundx;
          newNode.getBounds().y = boundy + 100;
          // newNode.setDestination();
          this.state.diagram.addItem(newNode);

          // console.log(newNode);
          // // var Link = new mf.Diagramming.DiagramLink(newNode, node);
          this.state.diagram.getFactory().createDiagramLink(newNode, node);
          // // this.state.diagram.addItem(Link);
          // // newNodes.push(newNode);
          // // var al = node.getText();
          // // this.state.diagram.removeItem(node);
          // console.log(node.getBounds());
          console.log(node.content.fileName);
        });
        // this.state.diagram.clearAll();
        // for (var i = nodes.length - 1; i >= 0; i--) {
        //   this.state.diagram.removeItem(nodes[i]);
        //   console.log("node deleted");
        // }
        // console.log(nodes);
        var links = [...this.state.diagram.links];
        links.forEach((link) => {
          var shape = "";
          console.log(link);
          var DashStyle = mf.Drawing.DashStyle.Dash;
          link.strokeDashStyle = DashStyle;
        });
        // console.log(nodes.content.fileName);
      };

      const ValidateCAE = () => {
        var a = 0;
        // console.log("masuk validasi");
        try {
          // console.log(this.state.diagram);
          var nodes = [...this.state.diagram.nodes];
          const links = [...this.state.diagram.links];
          // console.log(nodes);
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
              // nodes.forEach((node) => {
              //   this.state.diagram.removeItem(node);
              //   // nodes = [this.state.diagram.nodes];
              // });
              alert("Relation direction can only be from bottop to top");
              console.log("Relation direction can only be from bottop to top");
              invalid = 1;
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
                  // console.log("Model invalid karena arah relasi salah");
                  a = 1;
                }
              }

              // this.state.diagram.removeItem(nodes);
            } else if (
              destination.content.fileName ==
              "/static/media/Evidence.1fc95cb7.svg"
            ) {
              console.log("Evidence cannot be pointed to");
              nodes.forEach((node) => {
                this.state.diagram.removeItem(node);
              });
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
                console.log(
                  "Model invalid karena Argument tidak bisa menuju Evidence"
                );
                a = 1;
              }
            }
            // console.log(link.shape);
          });
          nodes = [...this.state.diagram.nodes];
          // return a;
          // console.log(nodes);
        } catch (error) {
          console.log(error);
        }
        return invalid;
      };
      const ValidateGSN = () => {
        try {
          var nodes = [...this.state.diagram.nodes];
          const links = [...this.state.diagram.links];

          links.forEach((link) => {
            const origin = link.getOrigin();
            const destination = link.getDestination();
            var a = 0;

            const originIndex = nodes.findIndex((node) => node === origin);

            const destinationIndex = nodes.findIndex(
              (node) => node === destination
            );
            if (
              destination.content.fileName ==
                "/static/media/Context.f6f439fc.svg" ||
              destination.content.fileName ==
                "/static/media/Justification.c1b68ad4.svg" ||
              destination.content.fileName ==
                "/static/media/Assumption.d31ca3ab.svg"
            ) {
              if (destination.bounds.x == origin.bounds.x) {
                a = 1;
                console.log("Model invalid karena arah relasi salah");
              }
            } else {
              if (destination.bounds.y < origin.bounds.y) {
                a = 1;
                console.log("Model invalid karena arah relasi salah");
              }
            }

            // console.log(originIndex);
            // links.forEach((link) => {
            //
            if (origin.content.fileName == "/static/media/Goal.ce4d68d3.svg") {
              if (
                destination.content.fileName ==
                "/static/media/Goal.ce4d68d3.svg"
              ) {
                if (originIndex > destinationIndex) {
                  console.log("hey");
                  a = 1;
                }
              }
              if (
                destination.content.fileName ==
                "/static/media/Context.f6f439fc.svg"
              ) {
                var batas = origin.bounds.y + 5;
                if (destination.bounds.y >= batas) {
                  a = 1;
                }
              }
              if (link.brush == "black") {
                if (
                  destination.content.fileName ==
                  "/static/media/Assumption.d31ca3ab.svg"
                ) {
                  a = 1;
                  console.log("Model invalid karena tipe relasi salah");
                } else if (
                  destination.content.fileName ==
                  "/static/media/Context.f6f439fc.svg"
                ) {
                  a = 1;
                  console.log("Model invalid karena tipe relasi salah");
                } else if (
                  destination.content.fileName ==
                  "/static/media/Assumption.d31ca3ab.svg"
                ) {
                  a = 1;
                  console.log("Model invalid karena tipe relasi salah");
                }
              } else if (link.brush == "white") {
                if (
                  destination.content.fileName ==
                  "/static/media/Goal.ce4d68d3.svg"
                ) {
                  a = 1;
                  console.log("Model invalid karena tipe relasi salah");
                } else if (
                  destination.content.fileName ==
                  "/static/media/Strategy.be4bdf22.svg"
                ) {
                  a = 1;
                  console.log("Model invalid karena tipe relasi salah");
                } else if (
                  destination.content.fileName ==
                  "/static/media/Solution.537801ea.svg"
                ) {
                  a = 1;
                  console.log("Model invalid karena tipe relasi salah");
                }
              }

              // this.state.diagram.removeItem(nodes);
            } else if (
              origin.content.fileName == "/static/media/Strategy.be4bdf22.svg"
            ) {
              if (
                destination.content.fileName ==
                "/static/media/Context.f6f439fc.svg"
              ) {
                var batas = origin.bounds.y + 5;
                if (destination.bounds.y > batas) {
                  nodes.forEach((node) => {
                    this.state.diagram.removeItem(node);
                  });
                }
              }
              // console.log("aa");
              if (
                destination.content.fileName ==
                "/static/media/Solution.537801ea.svg"
              ) {
                // console.log("bb");
                a = 1;
              } else {
                if (link.brush == "black") {
                  if (
                    destination.content.fileName !=
                    "/static/media/Goal.ce4d68d3.svg"
                  ) {
                    a = 1;
                  }
                } else if (link.brush == "white") {
                  if (
                    destination.content.fileName ==
                    "/static/media/Assumption.d31ca3ab.svg"
                  ) {
                    a = 0;
                  } else if (
                    destination.content.fileName ==
                    "/static/media/Context.f6f439fc.svg"
                  ) {
                    a = 0;
                  } else if (
                    destination.content.fileName ==
                    "/static/media/Justification.c1b68ad4.svg"
                  ) {
                    a = 0;
                  } else {
                    a = 1;
                  }
                }
              }
            } else {
              nodes.forEach((node) => {
                this.state.diagram.removeItem(node);
              });
            }
            if (a == 1) {
              nodes.forEach((node) => {
                this.state.diagram.removeItem(node);
              });
            }
            // console.log(link.shape);
          });
          nodes = [...this.state.diagram.nodes];
          // console.log(`Done!`);
        } catch (error) {
          console.log(error);
        }
        return nodes;
      };
      const CAEToGSN = () => {
        var a = 0;
        try {
          // changeLinkShape(this.state.diagram);
          var nodes = [...this.state.diagram.nodes];
          const links = [...this.state.diagram.links];
          nodes.forEach((node) => {
            if (node.content.fileName == "/static/media/Claim.0d97347d.svg") {
              invalid = ValidateCAE();
              // console.log("ini a " + a);

              // this.state.diagram.setLinkShape(mf.Diagramming.LinkShape.Bezier);
            } else if (
              node.content.fileName == "/static/media/Goal.ce4d68d3.svg"
            ) {
              nodes = ValidateGSN();
              // this.state.diagram.setLinkShape(mf.Diagramming.LinkShape.Bezier);
            }
            // console.log(node);
          });
          // buat nodes baru dulu
          // console.log(nodes);
          if (invalid == 0) {
            const newNodes = [];

            nodes.forEach((node) => {
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
              // console.log(3);
              newNode.setTransparent(true);
              newNode.setContent(CAE_GSN(node.content));
              newNode.setImageAlign(mf.Diagramming.ImageAlign.Fit);
              newNode.image.svg = false;
              newNode.image.image.width = newNode.image.image.naturalWidth;
              newNode.image.image.height = newNode.image.image.naturalHeight;
              try {
                newNode.setText(node.text.text);
                newNode.setTextColor(node.text.pen);
                newNode.setTransparent(true);
              } catch (error) {
                console.log(error);
              }
              newNode.setBounds(nodeSize(newNode));
              // nodes.forEach((node) => {});
              // this.nodeSize(newNode);
              this.state.diagram.addItem(newNode);
              // newNode.setBounds(nodeSize(newNode));
              newNodes.push(newNode);
            });
            links.forEach((link) => {
              const origin = link.getOrigin();
              const destination = link.getDestination();
              var a = 0;
              // console.log(link.getOriginAnchor());
              const originIndex = nodes.findIndex((node) => node === origin);
              const destinationIndex = nodes.findIndex(
                (node) => node === destination
              );
              if (
                destination.content.fileName ==
                  "/static/media/Claim.0d97347d.svg" ||
                destination.content.fileName ==
                  "/static/media/Argument.e03e93c3.svg"
              ) {
                var shape = mf.Diagramming.Shape.fromId("Triangle");
                link.setHeadShape(shape);
                link.brush = "black";
                link.setShape(mf.Diagramming.LinkShape.Bezier);
                // var label = link.labels;

                // link.removeLabel(label[0]);
                link.autoRoute = true;

                link.route();
              } else {
                var shape = mf.Diagramming.Shape.fromId("Triangle");
                link.setHeadShape(shape);
                link.brush = "black";
                link.setShape(mf.Diagramming.LinkShape.Polyline);
                // var label = link.labels;
                link.setSegmentCount(1);

                link.autoRoute = false;
              }
              const state = {
                controlPoints: link.getControlPoints(),
                originAnchor: link.getOriginAnchor(),
                destinationAnchor: link.getDestinationAnchor(),
                shape: link.getShape(),
                startPoint: link.getStartPoint(),
                endPoint: link.getEndPoint(),
              };

              link.setDestination(newNodes[originIndex]);
              link.setOrigin(newNodes[destinationIndex]);
              link.setShape(state.shape);
              link.setEndPoint(state.startPoint);
              link.setStartPoint(state.endPoint);
              link.setOriginAnchor(state.destinationAnchor);
              link.setDestinationAnchor(state.originAnchor);
              link.setControlPoints(state.controlPoints);
            });
            // update link node lama ke node baru

            // tambahkan node baru dan hapus node lama

            newNodes.forEach((node) => {
              if (
                node.content.fileName == "/static/media/nullnote.5f2aad85.svg"
              ) {
                // console.log(node);
                this.state.diagram.clearAll();
                console.log(
                  "Model invalid | Reason : an element cannot be translated"
                );
              }
            });
            nodes.forEach((node) => {
              this.state.diagram.removeItem(node);
            });
          } else {
            console.log("Model invalid");
            invalid = 0;
          }
          // Claim = 0;
          // console.log(`Done!`);
        } catch (error) {
          console.log(error);
        }
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
                "/static/media/nullnote.5f2aad85.svg" ||
              link.origin.content.fileName ==
                "/static/media/nullnote.5f2aad85.svg"
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
            // console.log("cuy");
            console.log(orgIndex);
          });

          // tambahkan node baru dan hapus node lama
          newNodes.forEach((node) => {
            if (
              node.content.fileName == "/static/media/nullnote.5f2aad85.svg"
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
                height: "1500px",
                marginTop: "50px",
                // fontSize: 30,

                // width:''
              }}
              iconSize={new mf.Drawing.Size(38, 24.75208333333333)}
              // var
              // a={this.state.nodes[0].content}
              // fontSize={20};
              nodes={this.state.nodes}
              captions={this.state.captions}
            ></NodeListView>
            {/* <NodeListView
              defaultNodeSize={new mf.Drawing.Size(48, 24.75208333333333)}
              style={{
                height: "800px",

                // width:''
              }}
              nodes={this.state.GsnNodes}
              captions={this.state.GsnIds}
            ></NodeListView> */}
          </div>
          <div className="main">
            <div className="topbar">
              <div>
                <select
                  style={{ marginTop: 14, width: 180, fontSize: 14 }}
                  className="item"
                  defaultValue="3"
                  onChange={this.onSelectChange.bind(this)}
                >
                  <option value="3.1">CAE Link</option>
                  <option value="4"> GSN Supported By</option>
                  {/* <option value="4.1">GSN In Context Of</option> */}
                  <option value="4.3">SACM Asserted Evidence</option>
                  <option value="4.4">SACM Asserted Inference</option>

                  <option value="3">Choose Link Type</option>
                  <option value="10"> DrawContainer </option>
                  <option value="5"> DrawTable </option>
                  <option value="0"> Modify </option>
                  <option value="12"> Pan </option>
                </select>
              </div>
              <div>
                <Button
                  className="btns"
                  buttonStyle="btn--test"
                  buttonSize="btn--medium"
                  onClick={CAEToGSN}
                >
                  Transform CAE &#8596; GSN
                </Button>
                <Button
                  className="btns"
                  buttonStyle="btn--test"
                  buttonSize="btn--medium"
                  onClick={CAEToSACM}
                >
                  Transform CAE &#8596; SACM
                </Button>
                <Button
                  className="btns"
                  buttonStyle="btn--test"
                  buttonSize="btn--medium"
                  onClick={detail}
                >
                  detail
                </Button>
                {/* 
                <Button className="Button" id="test Button" onClick={detail}>
                  Detail
                </Button> */}
                {/* <Button
                  className="btns"
                  buttonStyle="btn--test"
                  buttonSize="btn--medium"
                  onClick={ValidateCAE}
                >
                  Validate CAE
                </Button> */}
                {/* <Button
                  className="btns"
                  buttonStyle="btn--test"
                  buttonSize="btn--medium"
                  onClick={ValidateGSN}
                >
                  Validate GSN
                </Button> */}

                <Button
                  className="btns"
                  buttonStyle="btn--test"
                  buttonSize="btn--medium"
                  onClick={() => navigate(-1)}
                >
                  Choose Language
                </Button>
              </div>
            </div>
            <div className="diagram-area">
              <DiagramView
                diagram={this.state.diagram}
                {...props}
                onNodeCreated={(diagram, args) => {
                  try {
                    var node = args.getNode(); //v3

                    this.nodeSize(node);

                    node.setImageAlign(mf.Diagramming.ImageAlign.Fit);
                    node.image.svg = false;
                    node.image.image.width = node.image.image.naturalWidth;
                    node.image.image.height = node.image.image.naturalHeight;
                  } catch (error) {
                    console.log(error);
                  }

                  // }}
                }}
                // onNodeDeleted={}
                onNodeModified={(diagram, args) => {
                  // console.log("wakwaaw");
                }}
                onLinkCreated={(sender, args) => {
                  var behave = this.state.behavior;
                  // console.log("actual value " + behave);
                  if (behave == 4) {
                    this.SupportedBy(sender, args);
                  } else if (behave == 4.1) {
                    this.InContextOf(sender, args);
                  } else if (behave == 4.2) {
                    this.AssertedInference(sender, args);
                  } else if (behave == 4.3) {
                    this.AssertedEvidence(sender, args);
                  } else if (behave == 4.4) {
                    this.AssertedEvidence(sender, args);
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
                    // console.log("hwaa");
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
  return <Cae_Gsn />;
};
export default Cae_Gsn;
