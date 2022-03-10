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
const nodeDict = {
  textFie: {
    svg: require("./notasi/Text.svg"),
    name: "Text Field",
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
      case "ArgumentPackageInterface":
        return "gsnContract";
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
    console.log(targetNode.content);
    return targetNode.content;
  }
};
const GSN_SACM1 = (content) => {
  console.log("gsnsacm1");
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

const GSNtoSACM = (props) => {
  const navigate = useNavigate();

  class GSNtoSACM extends Component {
    constructor(props) {
      super(props);
      var idNum = 0;
      var Size = new mf.Drawing.Size(49, 23);

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
        // var char = i;
        // var Size = new mf.Drawing.Size(49, 23);
        // node.setBounds(new cm.Drawing.Rect(25, 15, 42, 25));
        //
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
        count: 0,
      };
    }

    diagramId(node) {
      var idNum = 1;
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
        bound.height = 33.08958333333334;
        bound.width = 62.92083333333335;
        node.text.text = "S" + Strategy;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = 3;
        node.text.padding.left = bound.width / 5;
        Strategy++;
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
      } else if (noda == "/static/media/ArgumentPackage.cf92e47b.svg") {
        bound.height = 32;
        bound.width = 68;
        node.text.text = "AP" + AP;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 7;
        node.text.padding.left = bound.width / 8;
        AP++;
      } else if (noda == "/static/media/argumentpackagebinding.7a8eea98.svg") {
        bound.height = 32;
        bound.width = 68;
        node.text.text = "APB" + APB;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 7;
        node.text.padding.left = bound.width / 8;
        APB++;
      } else if (
        noda == "/static/media/ArgumentPackageInterface.40dbebac.svg"
      ) {
        bound.height = 32;
        bound.width = 68;
        node.text.text = "API" + API;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 7;
        node.text.padding.left = bound.width / 8;
        API++;
      } else if (noda == "/static/media/AwayGoal.c0065a5f.svg") {
        bound.height = 34.05416666666667;
        bound.width = 48;
        node.text.text = "AG" + AG;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 12;
        node.text.padding.left = bound.width / 12;
        AG++;
      } else if (noda == "/static/media/AwayContext.b5cf63b2.svg") {
        bound.height = 38.054166666666674;
        bound.width = 48;
        node.text.text = "AC" + AC;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 12;
        node.text.padding.left = bound.width / 12;
        AC++;
      } else if (noda == "/static/media/AwaySolution.b941a532.svg") {
        bound.height = 40.07708333333335;
        bound.width = 44.20833333333333;
        node.text.text = "AS" + AS;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 8;
        node.text.padding.left = bound.width / 6;
        AS++;
      } else if (noda == "/static/media/AwayAssumption.b2d2eaee.svg") {
        bound.height = 38.054166666666674;
        bound.width = 48;
        node.text.text = "AA" + AA;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 8;
        node.text.padding.left = bound.width / 12;
        AA++;
      } else if (noda == "/static/media/AwayJustification.5974292c.svg") {
        bound.height = 38.054166666666674;
        bound.width = 48;
        node.text.text = "AJ" + AJ;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 8;
        node.text.padding.left = bound.width / 12;
        AJ++;
      } else if (noda == "/static/media/AbstractClaim.eda3c139.svg") {
        bound.height = 28.171875;
        bound.width = 55.71041666666666;
        node.text.text = "ArC" + AbstractClaim;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        AbstractClaim++;
      } else if (noda == "/static/media/AssumedClaim.33028a97.svg") {
        bound.height = 34.89166666666665;
        bound.width = 54.037499999999994;
        node.text.text = "AsC" + AssumedClaim;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        AssumedClaim++;
      } else if (noda == "/static/media/AxiomaticClaim.a2fa5110.svg") {
        bound.height = 32.171875;
        bound.width = 56;
        node.text.text = "AxC" + AxiomaticClaim;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        AxiomaticClaim++;
      } else if (noda == "/static/media/DefeatedClaim.2de09710.svg") {
        bound.height = 30.613541666666663;
        bound.width = 55.77291666666666;
        node.text.text = "DfC" + DefeatedClaim;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        DefeatedClaim++;
      } else if (noda == "/static/media/NeedSupportClaim.21d278bd.svg") {
        bound.height = 32.35729166666667;
        bound.width = 55.71041666666666;
        node.text.text = "NsC" + NeedsSupport;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 18;
        node.text.padding.left = bound.width / 20;
        NeedsSupport++;
      } else if (noda == "/static/media/AsCitedClaim.b525810f.svg") {
        bound.height = 28.353125000000006;
        bound.width = 75.85;
        node.text.text = "ACC" + ACC;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 20;
        node.text.padding.left = bound.width / 4.5;
        ACC++;
      } else if (noda == "/static/media/AsCitedAssumed.d4351573.svg") {
        bound.height = 28.353125000000006;
        bound.width = 69.92916666666667;
        node.text.text = "ACA" + ACA;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 20;
        node.text.padding.left = bound.width / 4.5;
        ACA++;
      } else if (noda == "/static/media/AsCitedReference.9ef9dd3a.svg") {
        bound.height = 38.52708333333334;
        bound.width = 54.12291666666667;
        node.text.text = "ACR" + ACR;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 14;
        node.text.padding.left = bound.width / 3.5;
        ACR++;
      } else if (noda == "/static/media/AsCitedAxiomatic.9731dda6.svg") {
        bound.height = 28.353125000000006;
        bound.width = 69.92916666666667;
        node.text.text = "ACX" + ACX;
        node.text.lineAlignment = 0;
        node.text.textAlignment = 0;
        node.text.padding.top = bound.height / 20;
        node.text.padding.left = bound.width / 4.5;
        ACX++;
      }

      // 22.78645833333333
      // 24
      node.setBounds(bound);

      Nomer += 1;
    }

    arrangeDiagram(diagram) {
      var treeLayout = new mf.Graphs.TreeLayout();
      treeLayout.linkType = mf.Graphs.TreeLayoutLinkType.Polyline;
      diagram.arrange(treeLayout);
    }
    // changeLinkShape = () => {
    //   this.state.diagram.setLinkShape(mf.Diagramming.LinkShape.Bezier);
    //   // KALAU MAU LURUS AJA DI SET FALSE
    //   this.state.diagram.setRouteLinks(true);
    // };
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

    onLockClicked(event) {
      var diagram = this.state.diagram;
      var selectedItems = diagram.getSelection().nodes;

      if (selectedItems.length > 0) {
        var selectedNode = selectedItems[0];

        if (
          selectedNode.getEnabledHandles() !==
          mf.Diagramming.AdjustmentHandles.None
        )
          selectedNode.setEnabledHandles(mf.Diagramming.AdjustmentHandles.None);
        else
          selectedNode.setEnabledHandles(mf.Diagramming.AdjustmentHandles.All);
      }
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

    AssertedInference(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      // var shape = "";
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
      var titik = args.getLink().points.length;
      var mid = titik - 2;
      // console.log(mid);
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

    AssertedContex(sender, args) {
      // var shape = mf.Diagramming.Shape.fromId("Triangle");
      var shape = "";

      var shape = mf.Diagramming.Shape.fromId("Rectangle");
      var brush = mf.Drawing.Brush;
      // brush.setheadBrush("black");
      args.getLink().headShapeSize = 3;
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
      var titik = args.getLink().points.length;
      var mid = titik - 2;
      // console.log(mid);
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
      // console.log(shape);
      args.getLink().setHeadShape(shape);
      args.getLink().brush = "black";

      // var DashStyle = mf.Drawing.DashStyle.Dash;
      // args.getLink().strokeDashStyle = DashStyle;

      // console.log(shape);
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
    // onNodeDropped(sender, args) {
    //   var n = args.getNode();

    //   console.log(n);
    // }
    linkFunct(sender, args) {
      var links = [...this.state.diagram.links];
      // change the arrowhead shape
      // var headShape = mf.Diagramming.Shape.fromId("Arrow");
      // setLinkHeadShape(headShape);
      // links.forEach((link) => {
      //   link.text = "adaaad";
      //   // var origin = link.getOrigin();
      //   // console.log(origin.getBounds());
      // });
      var shape = mf.Diagramming.Shape.fromId("Triangle");
      console.log(shape);
      args.getLink().setHeadShape(shape);
      var n = args.getLink();
      n.brush = "white";
      console.log(n);
      // var link = this.state.diagram.links;
      // link.forEach((link) => {
      // link.label = "\u25AD";
      // console.log(link.label);
      // var headShape = mf.Diagramming.Shape.fromId("Arrow");
      // this.state.diagram.setLinkHeadShape(headShape);
      // link.horihorizontalAlign = mf.Diagramming.Alignment.Center;
      // });
      // console.log(args.link.label);
      // add the box

      // link.addLabel(lab);
      // uncomment the below line to 'hide' the dots
      //label.textColor = "#c0c0c0";
      // var lab = "U+25AD";

      // var lab = "\u25AD";
      // var label = args.link.addLabel(lab);
      // label.brush = "white";
      // label.size = 10;
      // var Font = mf.Drawing.Font;

      // label.font = new Font("Roboto", 10);

      // label.horizontalAlign = mf.Diagramming.Alignment.Center;
      // label.verticalAlign = mf.Diagramming.Alignment.Center;
    }
    render() {
      var props = {
        id: "diagram1",
        backBrush: "white",
        behavior: this.state.behavior,
      };
      // FUntion for validating graph

      const detail = () => {
        const Nodes = [];
        // console.log(Nomer);
        // Nomer += 1;
        // var idNum = 0;

        // get X and Y coordinate for validation
        // console.log(idNum);
        // console.log(test);
        var a = 0;
        var nodes = [...this.state.diagram.nodes];
        var links = [...this.state.diagram.links];
        // // console.log(nodes.bounds);
        // //Call funtion for validation
        // push(nodes);
        var i = 0;

        var nodes = [...this.state.diagram.nodes];
        var links = [...this.state.diagram.links];

        // this.state.diagram.clearAll();
        nodes.forEach((node) => {
          console.log(node.content.fileName);
          console.log(node.getBounds());
          // var content = new mf.Diagramming.SvgContent();
          // content.parse("/static/media/ArtifactReference.ebdffe5f.svg");
          // node.setContent(content);
          // // node.setContent()
          // console.log(content);
          // // node.setContent("/static/media/Claim.65db5c64.svg");
        });
        // this.state.diagram.clearAll();
        // for (var i = nodes.length - 1; i >= 0; i--) {
        //   this.state.diagram.removeItem(nodes[i]);
        //   console.log("node deleted");
        // }
        // console.log(nodes);
        var links = [...this.state.diagram.links];
        links.forEach((link) => {
          console.log(link.headShape);
          // console.log(node.getBounds());
          // var content = new mf.Diagramming.SvgContent();
          // content.parse("/static/media/ArtifactReference.ebdffe5f.svg");
          // node.setContent(content);
          // // node.setContent()
          // console.log(content);
          // // node.setContent("/static/media/Claim.65db5c64.svg");
        });
        // nodes.forEach((node) => {
        //   console.log(node.content.fileName);
        //   console.log(node.getBounds());
        //   // var al = node.getText();
        //   // console.log(node);

        //   // var al = al.replace("G", "C");
        //   // // console.log(al.replace("Al", "Mal"));
        //   // var Alignment = mf.Diagramming.Alignment;
        //   // var rect = node.getBounds().clone();

        //   // // if (node.content.fileName == "/static/media/Claim.0d97347d.svg") {
        //   // rect.width = node.getEffectiveFontSize();
        //   // rect.x += 10;
        //   // // var extraText = new Text(
        //   // //   al, // replace with this.yourFieldName
        //   // //   rect // this.getBounds().clone()
        //   // // );
        //   // node.text.setBounds(rect);
        //   // // node.setText(Nomer);
        //   // // Nodes.push(node);
        //   // node.setText(al);
        //   // // node.text.text = "asd";
        //   // console.log(node);
        //   // console.log(node.graphicsContainer.content[2].text);
        //   // node.graphicsContainer.content[2].text = "C" + Nomer;
        //   // Nomer += 1;
        //   // var noda = Nodes[i];
        //   // var node = args.getNode();
        //   // var claim =idNum 1;
        //   // node.onUpdateVisuals = function () {
        //   //   var Alignment = mf.Diagramming.Alignment;
        //   //   var Text = mf.Drawing.Text;
        //   //   var content = this.graphicsContainer.content;
        //   //   var rect = this.getBounds().clone();
        //   //   rect.height = 2 * this.getEffectiveFontSize();
        //   //   rect.x -= rect.height / 2;
        //   //   if (node.content.fileName == "/static/media/Claim.0d97347d.svg") {
        //   //     var extraText = new Text(
        //   //       "C" + Nomer, // replace with this.yourFieldName
        //   //       rect // this.getBounds().clone()
        //   //     );
        //   //   } else {
        //   //     var extraText = new Text(
        //   //       "Id", // replace with this.yourFieldName
        //   //       rect // this.getBounds().clone()
        //   //     );
        //   //   }

        //   //   extraText.textAlignment = Alignment.Center;
        //   //   extraText.lineAlignment = Alignment.Near;
        //   //   extraText.fitInBounds = true;
        //   //   extraText.font = this.getEffectiveFont();
        //   //   content.push(extraText);
        //   //   // idNum += 1;
        //   // };
        //   // Nomer += 1;
        //   // console.log(node.getIndex());
        //   // console.log(this.state.diagram.nodes);
        //   // const bounding = node.getBounds();
        //   // console.log(bounding);
        //   // newNode.setBounds(bound);
        //   // console.log(node.bounds);
        //   // node.setContent(require("./notasi/SACM/ArgumentPackage.svg"));
        //   // console.log(node.content.fileName);
        //   // GET OUTGOING/INCOMING lINK NUMBER
        //   // console.log(node);
        //   // var bounding = node.getBounds();
        //   // bounding.x += 20;
        //   // node.setBounds(bounding);
        //   // idNum += 1;
        // });

        // links.forEach((link) => {
        //   // console.log(link.headShape.id);
        //   // console.log(link.labels);
        //   // if (link.labels[0].text.text == "") {
        //   //   console.log("same");
        //   // }
        //   //   const origin = link.getOrigin();
        //   //   const destination = link.getDestination();
        //   //   // console.log();
        //   //   // console.log(link.headShape.id);
        //   //   // console.log(link.points[0].x);
        //   //   // link.points[0].x += 38;
        //   //   // var dest = link.getStartPoint();
        //   //   // console.log(link.);
        //   //   console.log(link.getOriginAnchor());
        //   //   if (
        //   //     destination.content.fileName == "/static/media/Claim.0d97347d.svg"
        //   //   ) {
        //   //     // link.setOriginAnchor(0);
        //   //     link.setOriginAnchor(0);
        //   //     if (
        //   //       origin.content.fileName == "/static/media/Argument.e03e93c3.svg"
        //   //     ) {
        //   //       link.setOriginAnchor(3);
        //   //       console.log(link.getOriginAnchor());
        //   //       a = 1;
        //   //     } else if (
        //   //       origin.content.fileName == "/static/media/Evidence.1fc95cb7.svg"
        //   //     ) {
        //   //       link.setOriginAnchor(0);
        //   //       a = 1;
        //   //     } else if (
        //   //       origin.content.fileName == "/static/media/Claim.0d97347d.svg"
        //   //     ) {
        //   //       link.setOriginAnchor(0);
        //   //       a = 1;
        //   //     }
        //   //   }
        //   //   // GANTI ANCHOR LINK
        //   //   // link.setOriginAnchor(3);
        //   //   // console.log(dest);
        //   //   // link.setStartPoint(dest);
        //   //   // console.log(link.)
        //   //   // var label = link.addLabel("\u25AD");
        //   //   // label.horizontalAlign = mf.Diagramming.Alignment.Center;
        //   //   // label.verticalAlign = mf.Diagramming.Alignment.Center;
        //   //   // label.brush = "white";
        //   //   // var Font = mf.Drawing.Font;
        //   //   // label.font = new Font("Roboto", 10);
        //   //   // console.log(label);
        //   //   // console.log(link.labels);
        //   //   // console.log("label added");
        //   //   //   const origin = link.getOrigin();
        //   //   //   const destination = link.getDestination();
        //   //   // link.removeLabel(label);
        //   //   // console.log("label removed");
        //   //   // link.angles = link.angles + 10.0;
        //   //   //   // const originIndex = nodes.findIndex((node) => node === origin);
        //   //   //   // const destinationIndex = nodes.findIndex(
        //   //   //   //   (node) => node === destination
        //   //   //   // );
        //   //   //   // if (destinationIndex == -1) {
        //   //   //   //   console.log("jjjj");
        //   //   //   // }
        //   //   //   var batas = origin.bounds.y + 5;
        //   //   //   if (destination.bounds.y >= batas) {
        //   //   //     console.log("over");
        //   //   //   }
        //   //   //   console.log(link);
        //   //   //   console.log(origin.bounds.y);
        //   //   //   console.log(destination.bounds.y);
        //   //   //   // console.log(nodes[destinationIndex]);
        //   //   //   // var text = link.text;
        //   //   //   // console.log(link);
        //   //   //   // if (getMessage(text)) {
        //   //   //   console.log("khaer mone");
        //   //   // }
        //   //   // var origin = link.getOrigin();
        //   //   // console.log(origin.getBounds());
        // });
        // console.log(nodes.content.fileName);
      };
      const nodeSize = (node) => {
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
          // Strategy++;
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
        } else if (
          noda == "/static/media/argumentpackagebinding.7a8eea98.svg"
        ) {
          bound.height = 32;
          bound.width = 68;
          node.text.text = "APB";
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 7;
          node.text.padding.left = bound.width / 8;
        } else if (noda == "/static/media/AsCitedClaim.b525810f.svg") {
          bound.height = 28.353125000000006;
          bound.width = 75.85;
          var al = node.getText();
          var al = al.replace("AG", "ACC");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 20;
          node.text.padding.left = bound.width / 4.5;
          // ACC++;
        } else if (noda == "/static/media/AwayGoal.c0065a5f.svg") {
          bound.height = 34.05416666666667;
          bound.width = 48;
          var al = node.getText();
          var al = al.replace("ACC", "AG");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 12;
          node.text.padding.left = bound.width / 12;
          // AG++;
        } else if (noda == "/static/media/AsCitedAssumed.d4351573.svg") {
          bound.height = 28.353125000000006;
          bound.width = 69.92916666666667;
          var al = node.getText();
          var al = al.replace("AA", "ACA");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 20;
          node.text.padding.left = bound.width / 4.5;
          // ACA++;
        } else if (noda == "/static/media/AwayAssumption.b2d2eaee.svg") {
          bound.height = 38.054166666666674;
          bound.width = 48;
          var al = node.getText();
          var al = al.replace("ACA", "AA");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 8;
          node.text.padding.left = bound.width / 12;
          // AA++;
        } else if (noda == "/static/media/AsCitedReference.9ef9dd3a.svg") {
          bound.height = 38.52708333333334;
          bound.width = 54.12291666666667;
          node.text.text = "ACR";
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 14;
          node.text.padding.left = bound.width / 3.5;
          // ACX++;
        } else if (noda == "/static/media/AsCitedAxiomatic.9731dda6.svg") {
          bound.height = 28.353125000000006;
          bound.width = 69.92916666666667;
          var al = node.getText();
          var al = al.replace("AJ", "ACX");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 20;
          node.text.padding.left = bound.width / 4.5;
          // ACX++;
        } else if (noda == "/static/media/AwaySolution.b941a532.svg") {
          bound.height = 40.07708333333335;
          bound.width = 44.20833333333333;
          var al = node.getText();
          var al = al.replace("ACR", "AS");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 8;
          node.text.padding.left = bound.width / 6;
          // AS++;
        } else if (noda == "/static/media/AwayJustification.5974292c.svg") {
          bound.height = 38.054166666666674;
          bound.width = 48;
          var al = node.getText();
          var al = al.replace("ACX", "AJ");
          node.setText(al);
          node.text.lineAlignment = 0;
          node.text.textAlignment = 0;
          node.text.padding.top = bound.height / 8;
          node.text.padding.left = bound.width / 12;
          // AJ++;
        }
        // 22.78645833333333
        // 24
        return bound;

        // Nomer += 1;
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
              nodes.forEach((node) => {
                this.state.diagram.removeItem(node);
                // nodes = [this.state.diagram.nodes];
              });
              console.log("Relation direction can only be from bottop to top");
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
                  // console.log("Model invalid karena arah relasi salah");
                  a = 1;
                }
              }

              // this.state.diagram.removeItem(nodes);
            } else if (
              destination.content.fileName ==
              "/static/media/Evidence.1fc95cb7.svg"
            ) {
              console.log("Evidence cannot ");
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
                  "Model invalid karena Argument cannot point to Evidence"
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
        return nodes;
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
              origin.content.fileName == "/static/media/Context.f6f439fc.svg"
            ) {
              console.log(
                "Relation direction can only be from goal/strategy to context"
              );
              a = 1;

              // if (destination.bounds.x == origin.bounds.x) {
              //   a = 1;
              // }
            } else if (
              origin.content.fileName ==
              "/static/media/Justification.c1b68ad4.svg"
            ) {
              console.log(
                "Relation direction can only be from goal/strategy to justification"
              );
              a = 1;
            } else if (
              origin.content.fileName == "/static/media/Assumption.d31ca3ab.svg"
            ) {
              console.log(
                "Relation direction can only be from goal/strategy to assumption"
              );
              a = 1;
            }
            if (
              origin.content.fileName ==
                "/static/media/AwayGoal.c0065a5f.svg" ||
              origin.content.fileName ==
                "/static/media/AwayAssumption.b2d2eaee.svg" ||
              destination.content.fileName ==
                "/static/media/AwayJustification.5974292c.svg" ||
              origin.content.fileName ==
                "/static/media/AwayJustification.5974292c.svg" ||
              destination.content.fileName ==
                "/static/media/AwayContext.b5cf63b2.svg" ||
              origin.content.fileName ==
                "/static/media/AwayContext.b5cf63b2.svg" ||
              destination.content.fileName ==
                "/static/media/AwaySolution.b941a532.svg" ||
              origin.content.fileName ==
                "/static/media/AwaySolution.b941a532.svg"
            ) {
              // console.log(
              //   "Relation direction can only be from goal to context"
              // );

              if (link.originAnchor == 2) {
                a = 1;
                console.log("Away Element cannot be decomposed");
              }

              // if (destination.bounds.x == origin.bounds.x) {
              //   a = 1;
              // }
            }

            //   // if (destination.bounds.x == origin.bounds.x) {
            //   //   a = 1;

            //   // }
            //   // } else {
            //   //   if (destination.bounds.y < origin.bounds.y) {
            //   //     a = 1;
            //   //     console.log(
            //   //       "Relation direction can only be from top to bottom"
            //   //     );
            //   //   }
            // }

            // console.log(originIndex);
            // links.forEach((link) => {
            //
            if (origin.content.fileName == "/static/media/Goal.ce4d68d3.svg") {
              if (
                destination.content.fileName ==
                "/static/media/Goal.ce4d68d3.svg"
              ) {
                if (originIndex > destinationIndex) {
                  // console.log("hey");
                  a = 1;
                }
              }
              if (
                destination.content.fileName ==
                "/static/media/Context.f6f439fc.svg"
              ) {
                // var batas = origin.bounds.y + 5;
                // if (destination.bounds.y >= batas) {
                //   a = 1;
                // }
              }
              if (link.brush == "black") {
                if (
                  destination.content.fileName ==
                  "/static/media/Assumption.d31ca3ab.svg"
                ) {
                  a = 1;
                  console.log("supportedBy cannot connect to Assumption");
                } else if (
                  destination.content.fileName ==
                    "/static/media/Context.f6f439fc.svg" ||
                  destination.content.fileName ==
                    "/static/media/AwayContext.b5cf63b2.svg"
                ) {
                  a = 1;
                  console.log(
                    "supportedBy cannot connect to Contex/Away Context"
                  );
                } else if (
                  destination.content.fileName ==
                  "/static/media/Assumption.d31ca3ab.svg"
                ) {
                  a = 1;
                  console.log("supportedBy cannot connect to Assumption");
                }
              } else if (link.brush == "white") {
                if (
                  destination.content.fileName ==
                  "/static/media/Goal.ce4d68d3.svg"
                ) {
                  a = 1;
                  console.log("inContextOf cannot connect to Goal");
                } else if (
                  destination.content.fileName ==
                  "/static/media/Strategy.be4bdf22.svg"
                ) {
                  a = 1;
                  console.log("inContextOf cannot connect to Strategy");
                } else if (
                  destination.content.fileName ==
                  "/static/media/Solution.537801ea.svg"
                ) {
                  a = 1;
                  console.log("inContextOf cannot connect to Solution");
                }
              }

              // this.state.diagram.removeItem(nodes);
            } else if (
              origin.content.fileName ==
                "/static/media/Strategy.be4bdf22.svg" ||
              origin.content.fileName == "/static/media/Goal.ce4d68d3.svg"
            ) {
              // if (
              //   destination.content.fileName ==
              //   "/static/media/Context.f6f439fc.svg"
              // ) {
              //   // var batas = origin.bounds.y + 5;
              //   // if (destination.bounds.y > batas) {
              //   //   nodes.forEach((node) => {
              //   //     this.state.diagram.removeItem(node);
              //   //   });
              //   // }
              // }
              // console.log("aa");
              if (
                destination.content.fileName ==
                "/static/media/Solution.537801ea.svg"
              ) {
                // console.log("bb");
                a = 1;
              }

              // if (link.brush == "black") {
              //   if (
              //     destination.content.fileName !=
              //     "/static/media/Goal.ce4d68d3.svg"
              //   ) {
              //     console.log("Link type ");
              //     a = 1;
              //   }
              if (link.brush == "white") {
                if (
                  destination.content.fileName !=
                  "/static/media/Assumption.d31ca3ab.svg"
                ) {
                  console.log(
                    "supportedBy relation cannot connect to Assumption"
                  );
                  a = 1;
                } else if (
                  destination.content.fileName !=
                  "/static/media/Context.f6f439fc.svg"
                ) {
                  console.log("supportedBy relation cannot connect to Context");

                  a = 1;
                } else if (
                  destination.content.fileName !=
                  "/static/media/Justification.c1b68ad4.svg"
                ) {
                  console.log(
                    "supportedBy relation cannot connect to Justification"
                  );

                  a = 1;
                } else {
                  a = 0;
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
              nodes = ValidateCAE();
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
          if (nodes.length > 0) {
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
                this.state.diagram.removeItem(node);
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
          }
          // Claim = 0;
          // console.log(`Done!`);
        } catch (error) {
          console.log(error);
        }
      };
      const GSNToSACM = () => {
        try {
          // changeLinkShape(this.state.diagram);
          var nodes = [...this.state.diagram.nodes];
          var links = [...this.state.diagram.links];
          var destIndex = 0;
          var orgIndex = 0;
          var strattogoal = 0;
          nodes.forEach((node) => {
            if (node.content.fileName == "/static/media/Claim.0d97347d.svg") {
              // nodes = ValidateCAE();
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
          if (nodes.length > 0) {
            // buat nodes baru dulu
            const newNodes = [];
            var c = 0;
            nodes.forEach((node) => {
              // console.log(node.outgoingLinks);
              var b = 0;
              if (node.content.fileName == "/static/media/Claim.65db5c64.svg") {
                if (node.outgoingLinks.length >= 1) {
                  if (node.outgoingLinks[0].headShape.id == "Rectangle") {
                    b = 1;
                  }
                }
              } else if (
                node.content.fileName == "/static/media/Assumption.d31ca3ab.svg"
              ) {
                if (node.incomingLinks.length >= 1) {
                  if (
                    node.incomingLinks[0].origin.content.fileName ==
                    "static/media/Claim.65db5c64.svg"
                  ) {
                    b = 1;
                  }
                }
              } else if (
                node.content.fileName ==
                "/static/media/ArtifactReference.ebdffe5f.svg"
              ) {
                if (node.outgoingLinks.length >= 1) {
                  if (node.outgoingLinks[0].headShape.id == "Triangle") {
                    b = 1;
                  }
                }
              } else if (
                node.content.fileName ==
                "/static/media/AsCitedReference.9ef9dd3a.svg"
              ) {
                if (node.outgoingLinks.length >= 1) {
                  if (node.outgoingLinks[0].headShape.id == "Rectangle") {
                    b = 1;
                  }
                }
              }
              // links.forEach((link) => {
              //   const origin = link.getOrigin();
              //   const destination = link.getDestination();
              //   if (
              //     destination.content.fileName ==
              //       "/static/media/Claim.65db5c64.svg" &&
              //     origin.content.fileName == "/static/media/Claim.65db5c64.svg"
              //   ) {
              //     if (link.headShape.id == "Rectangle") {
              //       b = 1;
              //     }
              //   }
              // });
              const newNode = new mf.Diagramming.SvgNode(this.state.diagram);
              // console.log(node.content.fileName);

              // atur posisi dan ukuran node yg baru sesuai yg sekarang.
              const bound = node.getBounds();
              newNode.setBounds(bound);

              // [TODO] pastikan kontennya sesuai
              newNode.setTransparent(true);
              if (b == 1) {
                // console.log("im in");
                newNode.setContent(GSN_SACM1(node.content));
              } else {
                newNode.setContent(GSN_SACM(node.content));
              }
              var pattern = new mf.Diagramming.AnchorPattern([
                new mf.Diagramming.AnchorPoint(50, 0, true, true),
                new mf.Diagramming.AnchorPoint(100, 50, true, true),
                new mf.Diagramming.AnchorPoint(50, 100, true, true),
                new mf.Diagramming.AnchorPoint(0, 50, true, true),
              ]);
              newNode.setAnchorPattern(pattern);
              newNode.setImageAlign(mf.Diagramming.ImageAlign.Fit);
              newNode.image.svg = false;
              newNode.image.image.width = newNode.image.image.naturalWidth;
              newNode.image.image.height = newNode.image.image.naturalHeight;
              try {
                newNode.setText(node.text.text);
                newNode.setTextColor(node.text.pen);
                newNode.setTransparent(true);
              } catch (error) {
                // console.log("jir kaga bisa");
              }
              // nodes.forEach((node) => {});
              newNode.setBounds(nodeSize(newNode));

              this.state.diagram.addItem(newNode);

              newNodes.push(newNode);
            });
            // links.forEach((link) => {
            //   console.log(link.destination.content.fileName);
            // });
            // update link node lama ke node baru
            links.forEach((link) => {
              var d = 0;
              const origin = link.getOrigin();
              const destination = link.getDestination();
              var a = 0;

              const originIndex = nodes.findIndex((node) => node === origin);
              const destinationIndex = nodes.findIndex(
                (node) => node === destination
              );
              if (
                link.origin.content.fileName ==
                "/static/media/Claim.65db5c64.svg"
              ) {
                if (link.labels[0].text.text != "") {
                  c = 1;
                }

                // if (
                //   link.destination.content.fileName ==
                //   "/static/media/Claim.65db5c64.svg"
                // ) {
                //   strattogoal = originIndex;
                //   d = 3;
                // }
              }
              if (
                origin.content.fileName ==
                "/static/media/argumentpackagebinding.7a8eea98.svg"
              ) {
                a = 0;
              }
              if (
                destination.content.fileName ==
                "/static/media/ContractModule.92a129a3.svg"
              ) {
                a = 1;
              }
              if (
                destination.content.fileName ==
                "/static/media/Module.950dd4fd.svg"
              ) {
                a = 1;
              }
              if (
                origin.content.fileName ==
                "/static/media/ArgumentPackage.cf92e47b.svg"
              ) {
                a = 0;
              }

              if (
                origin.content.fileName ==
                "/static/media/AssumedClaim.33028a97.svg"
              ) {
                a = 2;
              }
              if (
                origin.content.fileName ==
                "/static/media/AxiomaticClaim.a2fa5110.svg"
              ) {
                a = 2;
              }
              // if (
              //   destination.content.fileName ==
              //     "/static/media/AwayGoal.c0065a5f.svg" ||
              //   destination.content.fileName ==
              //     "/static/media/AwayAssumption.b2d2eaee.svg" ||
              //   destination.content.fileName ==
              //     "/static/media/AwayJustification.5974292c.svg" ||
              //   destination.content.fileName ==
              //     "/static/media/AwayContext.b5cf63b2.svg" ||
              //   destination.content.fileName ==
              //     "/static/media/AwaySolution.b941a532.svg"
              // ) {
              //   // console.log(destination);
              //   if (link.brush == "white") {
              //     var x = destination.bounds.x + 70;
              //     var y = destination.bounds.y;
              //   } else {
              //     var x = destination.bounds.x;
              //     var y = destination.bounds.y + 60;
              //   }
              //   var content = new mf.Diagramming.SvgContent();

              //   const newNode = new mf.Diagramming.SvgNode(this.state.diagram);
              //   var pattern = new mf.Diagramming.AnchorPattern([
              //     new mf.Diagramming.AnchorPoint(50, 0, true, true),
              //     new mf.Diagramming.AnchorPoint(100, 50, true, true),
              //     new mf.Diagramming.AnchorPoint(50, 100, true, true),
              //     new mf.Diagramming.AnchorPoint(0, 50, true, true),
              //   ]);
              //   newNode.setAnchorPattern(pattern);
              //   content.parse("/static/media/ArgumentPackage.cf92e47b.svg");
              //   newNode.setTransparent(true);
              //   newNode.setContent(content);
              //   newNode.setImageAlign(mf.Diagramming.ImageAlign.Fit);
              //   newNode.image.svg = false;
              //   newNode.image.image.width = newNode.image.image.naturalWidth;
              //   newNode.image.image.height = newNode.image.image.naturalHeight;
              //   try {
              //     // newNode.setText(node.text.text);
              //     // newNode.setTextColor(node.text.pen);
              //     newNode.setTransparent(true);
              //   } catch (error) {
              //     console.log(error);
              //   }
              //   newNode.setBounds(nodeSize(newNode));
              //   newNode.getBounds().x = x;
              //   newNode.getBounds().y = y;
              //   // newNode.setDestination();
              //   console.log(newNode);
              //   this.state.diagram.addItem(newNode);
              //   this.state.diagram
              //     .getFactory()
              //     .createDiagramLink(newNode, newNodes[destinationIndex]);
              //   var links = [...this.state.diagram.links];
              //   links.forEach((link) => {
              //     if (
              //       link.origin.content.fileName ==
              //       "/static/media/ArgumentPackage.cf92e47b.svg"
              //     ) {
              //       var shape = mf.Diagramming.Shape.fromId("Triangle");
              //       // console.log("gh");
              //       link.brush = "black";
              //       link.setHeadShape(shape);
              //       var DashStyle = mf.Drawing.DashStyle.Dash;
              //       link.strokeDashStyle = DashStyle;
              //       link.setShape(mf.Diagramming.LinkShape.Polyline);
              //     }
              //   });
              //   if (link.brush == "white") {
              //     a = 3;
              //   } else {
              //     a = 1;
              //   }
              //   console.log("away");
              //   // a = 3;
              //   // link.setDestinationAnchor(3);
              // }

              // links.forEach((link) => {
              //
              if (
                link.destination.content.fileName ==
                  "/static/media/nullnote.ce130ede.svg" ||
                link.origin.content.fileName ==
                  "/static/media/nullnote.ce130ede.svg"
              ) {
                this.state.diagram.removeItem(link);
              }
              if (
                destination.content.fileName ==
                  "/static/media/AwayGoal.c0065a5f.svg" ||
                origin.content.fileName == "/static/media/AwayGoal.c0065a5f.svg"
              ) {
                a = 1;
              }
              if (
                destination.content.fileName ==
                  "/static/media/AsCitedClaim.b525810f.svg" ||
                origin.content.fileName ==
                  "/static/media/AsCitedClaim.b525810f.svg"
              ) {
                a = 0;
              }
              if (
                destination.content.fileName ==
                  "/static/media/AwayAssumption.b2d2eaee.svg" ||
                origin.content.fileName ==
                  "/static/media/AwayAssumption.b2d2eaee.svg"
              ) {
                a = 1;
              }
              if (
                destination.content.fileName ==
                  "/static/media/AsCitedAssumed.d4351573.svg" ||
                origin.content.fileName ==
                  "/static/media/AsCitedAssumed.d4351573.svg"
              ) {
                a = 0;
              }
              if (
                destination.content.fileName ==
                  "/static/media/AwayJustification.5974292c.svg" ||
                origin.content.fileName ==
                  "/static/media/AwayJustification.5974292c.svg"
              ) {
                a = 3;
              }
              if (
                destination.content.fileName ==
                  "/static/media/AwayAssumption.b2d2eaee.svg" ||
                origin.content.fileName ==
                  "/static/media/AwayAssumption.b2d2eaee.svg"
              ) {
                a = 3;
              }
              if (
                destination.content.fileName ==
                  "/static/media/AwayContext.b5cf63b2.svg" ||
                origin.content.fileName ==
                  "/static/media/AwayContext.b5cf63b2.svg"
              ) {
                a = 3;
              }

              if (
                destination.content.fileName ==
                  "/static/media/AsCitedAxiomatic.9731dda6.svg" ||
                origin.content.fileName ==
                  "/static/media/AsCitedAxiomatic.9731dda6.svg"
              ) {
                a = 2;
              }

              if (
                destination.content.fileName ==
                  "/static/media/AsCitedReference.9ef9dd3a.svg" ||
                origin.content.fileName ==
                  "/static/media/AsCitedReference.9ef9dd3a.svg"
              ) {
                if (link.headShape.id == "Rectangle") {
                  a = 2;
                }
              }
              if (
                destination.content.fileName ==
                  "/static/media/AwaySolution.b941a532.svg" ||
                origin.content.fileName ==
                  "/static/media/AwaySolution.b941a532.svg"
              ) {
                a = 1;
              }

              if (
                link.origin.content.fileName ==
                "/static/media/Goal.ce4d68d3.svg"
              ) {
                if (
                  link.destination.content.fileName ==
                  "/static/media/Goal.ce4d68d3.svg"
                ) {
                  a = 1;
                } else if (
                  link.destination.content.fileName ==
                  "/static/media/Context.f6f439fc.svg"
                ) {
                  a = 3;
                } else if (
                  link.destination.content.fileName ==
                  "/static/media/Justification.c1b68ad4.svg"
                ) {
                  a = 3;
                } else if (
                  link.destination.content.fileName ==
                  "/static/media/Assumption.d31ca3ab.svg"
                ) {
                  a = 3;
                } else if (
                  link.destination.content.fileName ==
                  "/static/media/Strategy.be4bdf22.svg"
                ) {
                  orgIndex = originIndex;
                  var batas = origin.bounds.x + 20;
                  var bou = destination.getBounds();
                  if (batas >= bou.x) {
                    bou.x += 65;
                    destination.setBounds(bou);
                  }
                  link.setDestinationAnchor(3);
                  a = 1;
                  d = 1;
                } else if (
                  link.destination.content.fileName ==
                  "/static/media/Solution.537801ea.svg"
                ) {
                  a = 1;
                  d = 0;
                }
                // var shape = "";
                // var origin = args.getLink().getOrigin().content.fileName;
                // var label = link.addLabel("\u25AD");
                // var Font = mf.Drawing.Font;
                // label.horizontalAlign = mf.Diagramming.Alignment.Center;
                // label.verticalAlign = mf.Diagramming.Alignment.Center;
                // label.font = new Font("Roboto", 10);
                // console.log(link);
                // link.setHeadShape(shape);
                // link.brush = "black";
              }
              if (
                link.origin.content.fileName ==
                "/static/media/Strategy.be4bdf22.svg"
              ) {
                if (
                  link.destination.content.fileName ==
                    "/static/media/Goal.ce4d68d3.svg" ||
                  link.destination.content.fileName ==
                    "/static/media/AwayGoal.c0065a5f.svg"
                ) {
                  // console.log("masuk strat goal");
                  // console.log(orgIndex);
                  // link.setDestination(newNodes[orgIndex]);
                  d = 1;
                  a = 1;
                } else if (
                  link.destination.content.fileName ==
                  "/static/media/Context.f6f439fc.svg"
                ) {
                  a = 3;
                } else if (
                  link.destination.content.fileName ==
                  "/static/media/Justification.c1b68ad4.svg"
                ) {
                  a = 3;
                } else if (
                  link.destination.content.fileName ==
                  "/static/media/Assumption.d31ca3ab.svg"
                ) {
                  a = 3;
                } else if (
                  link.destination.content.fileName ==
                  "/static/media/Strategy.be4bdf22.svg"
                ) {
                  // orgIndex = originIndex;
                  var batas = origin.bounds.x + 20;
                  var bou = destination.getBounds();
                  if (batas >= bou.x) {
                    bou.x += 65;
                    destination.setBounds(bou);
                  }
                  link.setDestinationAnchor(3);
                  a = 1;
                  d = 1;
                } else if (
                  link.destination.content.fileName ==
                  "/static/media/Solution.537801ea.svg"
                ) {
                  a = 1;
                }
                // var shape = "";
                // var origin = args.getLink().getOrigin().content.fileName;
                // var label = link.addLabel("\u25AD");
                // var Font = mf.Drawing.Font;
                // label.horizontalAlign = mf.Diagramming.Alignment.Center;
                // label.verticalAlign = mf.Diagramming.Alignment.Center;
                // label.font = new Font("Roboto", 10);
                // console.log(link);
                // link.setHeadShape(shape);
                // link.brush = "black";
              } else if (
                link.origin.content.fileName ==
                  "/static/media/ArgumentReasoning.d99943df.svg" &&
                link.destination.content.fileName ==
                  "/static/media/Claim.65db5c64.svg"
              ) {
                orgIndex = originIndex;
                var bou = origin.getBounds();
                // if (batas >= bou.x) {
                bou.x -= 65;
                origin.setBounds(bou);
                // }
                // console.log("masuk arg claim");
                // d = 2;
                // link.setOriginAnchor(0);
                a = 0;
                // d = 1;
                // d = 3;
                link.setOriginAnchor(0);
                link.setDestinationAnchor(2);
              } else if (
                link.origin.content.fileName ==
                "/static/media/ArtifactReference.ebdffe5f.svg"
              ) {
                if (link.headShape.id == "Triangle") {
                  a = 0;
                } else {
                  a = 2;
                }
              } else if (
                link.origin.content.fileName ==
                "/static/media/ArgumentReasoning.d99943df.svg"
              ) {
                destIndex = originIndex;
                // console.log("org");
                d = 1;
              } else if (
                link.origin.content.fileName ==
                  "/static/media/Claim.65db5c64.svg" ||
                link.origin.content.fileName ==
                  "/static/media/AsCitedClaim.b525810f.svg"
              ) {
                // if (
                //   destination.content.fileName ==
                //   "/static/media/ArgumentReasoning.d99943df.svg"
                // ) {
                //   a = 0;
                //   d = 1;
                // }
                if (link.headShape.id == "Triangle") {
                  a = 0;
                  if (
                    link.destination.content.fileName ==
                      "/static/media/Claim.65db5c64.svg" ||
                    link.destination.content.fileName ==
                      "/static/media/AsCitedClaim.b525810f.svg"
                  ) {
                    destIndex = originIndex;
                    if (orgIndex > 0) {
                      link.setDestination(newNodes[destIndex]);
                      link.setOrigin(newNodes[orgIndex]);
                      link.setOriginAnchor(0);

                      link.setDestinationAnchor(2);

                      d = 4;
                    }
                  }
                } else {
                  a = 2;
                }
              } else if (
                link.origin.content.fileName ==
                "/static/media/Strategy.be4bdf22.svg"
              ) {
                if (
                  link.destination.content.fileName ==
                    "/static/media/Goal.ce4d68d3.svg" ||
                  destination.content.fileName ==
                    "/static/media/AwayGoal.c0065a5f.svg"
                ) {
                  // console.log("hit");
                  a = 1;
                }
              }

              if (a == 1) {
                var shape = mf.Diagramming.Shape.fromId("Triangle");
                link.setHeadShape(shape);
                link.brush = "black";
                link.setShape(mf.Diagramming.LinkShape.Cascading);
                var label = link.labels;

                // link.removeLabel(label[0]);
                // link.autoRoute = true;
                var label = link.addLabel("");
                var titik = link.points.length;
                var mid = titik - 1;
                // console.log(mid);
                label.setControlPointPosition(mid, 0, 0);
                label.horizontalAlign = mf.Diagramming.Alignment.Center;
                label.verticalAlign = mf.Diagramming.Alignment.Center;
                // label.brush = "white";
                // var Font = mf.Drawing.Font;
                link.route();

                // label.font = new Font("Roboto", 10);
              } else if (a == 2) {
                var shape = mf.Diagramming.Shape.fromId("Triangle");
                link.setHeadShape(shape);

                link.brush = "white";
                link.setShape(mf.Diagramming.LinkShape.Bezier);
                var label = link.labels;
                link.headShapeSize = 5;

                link.removeLabel(label[0]);
                // link.autoRoute = true;
                // var label = link.addLabel("");
                // label.horizontalAlign = mf.Diagramming.Alignment.Center;
                // label.verticalAlign = mf.Diagramming.Alignment.Center;
                // label.brush = "white";
                // var Font = mf.Drawing.Font;
                link.route();

                // link.headShape.id
              } else if (a == 3) {
                var shape = mf.Diagramming.Shape.fromId("Rectangle");
                link.headShapeSize = 4;

                link.setHeadShape(shape);
                link.brush = "black";
                link.setShape(mf.Diagramming.LinkShape.Cascading);
                var label = link.labels;

                // link.removeLabel(label[0]);
                // link.autoRoute = true;
                var label = link.addLabel("");
                label.horizontalAlign = mf.Diagramming.Alignment.Center;
                label.verticalAlign = mf.Diagramming.Alignment.Center;
                // label.brush = "white";
                // var Font = mf.Drawing.Font;
                link.route();
              } else {
                var shape = mf.Diagramming.Shape.fromId("Triangle");
                link.setHeadShape(shape);
                link.brush = "black";
                link.setShape(mf.Diagramming.LinkShape.Bezier);
                link.autoRoute = true;
                var label = link.labels;
                link.removeLabel(label[0]);
                // var label = link.addLabel("\u25AD");
                // label.horizontalAlign = mf.Diagramming.Alignment.Center;
                // label.verticalAlign = mf.Diagramming.Alignment.Center;
                // label.brush = "white";
                // var Font = mf.Drawing.Font;
                // var label = link.addLabel("false");
                // label.horizontalAlign = mf.Diagramming.Alignment.Center;
                // label.verticalAlign = mf.Diagramming.Alignment.Center;
                // label.brush = null;
                // link.route();
                // label.font = new Font("Roboto", 10);
              }
              // console.log(link.route);

              const state = {
                controlPoints: link.getControlPoints(),
                originAnchor: link.getOriginAnchor(),
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
              // console.log("ini d " + d);
              // console.log();
              if (d == 0) {
                link.setDestination(newNodes[originIndex]);
                link.setOrigin(newNodes[destinationIndex]);
              } else if (d == 2) {
                // console.log("cae ke gsn");
                link.setDestination(newNodes[orgIndex]);
                link.setOrigin(newNodes[destinationIndex]);
              } else if (d == 4) {
                // console.log("Claim to claim");
              } else {
                // console.log("dari gsn ke cae");
                link.setDestination(newNodes[destIndex]);
                link.setOrigin(newNodes[destinationIndex]);
              }

              // link.setDestination(newNodes[originIndex]);
              link.setShape(state.shape);
              link.setEndPoint(state.startPoint);
              link.setStartPoint(state.endPoint);
              link.setOriginAnchor(state.destinationAnchor);
              link.setDestinationAnchor(state.originAnchor);
              link.setControlPoints(state.controlPoints);
            });

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
              if (c == 1) {
                this.state.diagram.removeItem(node);
              }
            });
            nodes.forEach((node) => {
              this.state.diagram.removeItem(node);
            });
          } else {
            console.log("Model invalid");
          }
        } catch (error) {
          console.log(error);
        }
      };

      return (
        <div className="container">
          <div className="sidebar-left">
            <NodeListView
              defaultNodeSize={new mf.Drawing.Size(42, 23)}
              style={{
                height: "1500px",
                marginTop: "50px",
                width: "300px",
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
                  style={{ marginTop: 14, width: 180, fontSize: 14 }}
                  onChange={this.onSelectChange.bind(this)}
                >
                  <option value="3.1">CAE Link</option>
                  <option value="4"> GSN Supported By</option>
                  <option value="4.1">GSN In Context Of</option>
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

                  <option value="3">Choose Link Type</option>
                  <option value="10"> DrawContainer </option>
                  <option value="5"> DrawTable </option>
                  <option value="0"> Modify </option>
                  <option value="12"> Pan </option>
                </select>
              </div>
              <div>
                {/* <Button
                  className="item"
                  id="lockItem"
                  onClick={console.log(this.state.nodes[0].content.fileName)}
                >
                  Lock / Unlock
                </Button> */}
                {/* <Button className="Button" id="test Button" onClick={CAEToGSN}>
                CAE &#8596; GSN
              </Button>
              <Button className="Button" id="test Button" onClick={CAEToSACM}>
                CAE &#8596; SACM
              </Button> */}
                <Button
                  className="btns"
                  buttonStyle="btn--test"
                  buttonSize="btn--medium"
                  onClick={GSNToSACM}
                >
                  GSN &#8596; SACM
                </Button>
                <Button
                  className="btns"
                  buttonStyle="btn--test"
                  buttonSize="btn--medium"
                  onClick={CAEToGSN}
                >
                  GSN &#8596; CAE
                </Button>
                <Button
                  className="btns"
                  buttonStyle="btn--test"
                  buttonSize="btn--medium"
                  onClick={detail}
                >
                  Detail
                </Button>
                {/* <Button className="Button" id="test Button" onClick={ValidateCAE}>
                Validate CAE
              </Button> */}
                <Button
                  className="btns"
                  buttonStyle="btn--test"
                  buttonSize="btn--medium"
                  onClick={ValidateGSN}
                >
                  Validate GSN
                </Button>
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
                    // console.log(node);
                    this.diagramId(node);
                    // node// onNodeCreated={(item, node) => { //
                    node.setImageAlign(mf.Diagramming.ImageAlign.Fit);
                    node.image.svg = false;
                    node.image.image.width = node.image.image.naturalWidth;
                    node.image.image.height = node.image.image.naturalHeight;
                  } catch (error) {
                    console.log(error);
                  }
                  // }}
                }}
                // onNodeCreated={(diagram, args) => {
                //   var node = args.getNode(); //v3
                //   console.log(node);
                //   // node// onNodeCreated={(item, node) => { // defaultNodeSize={new mf.Drawing.Size(38, 23)}
                //   node.setImageAlign(mf.Diagramming.ImageAlign.Fit);
                //   node.image.svg = false;
                //   node.image.image.width = node.image.image.naturalWidth;
                //   node.image.image.height = node.image.image.naturalHeight;

                //   // }}
                // }}
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
                    // console.log("hwaa");
                  }
                }}
                onLeaveInplaceEditMode={(item, node) => {
                  node.item.textColor = "black";
                }}
                // onNodeCreated={(item, node) => {
                //   node.setBounds(new cm.Drawing.Rect(25, 15, 42, 25));
                //   // node.setImageAlign(mf.Diagramming.ImageAlign.Fit());
                //   // node.image.svg = false;
                //   // node.image.image.width = node.image.image.naturalWidth;
                //   // node.image.image.height = node.image.image.naturalHeight;
                //   console.log(node);
                // }}
              />
            </div>
          </div>
          {/* <div className="sidebar-left">
          <NodeListView
            // NodeListView.defaultNodeSize
            onNodeSelected={(sender, args) => {
              this.onSelectedLinkChanged(sender, args);
            }}
            style={{
              height: "800px",
            }}
            nodes={this.state.linkNodes}
            captions={this.state.linkIds}
          ></NodeListView>
        </div> */}
        </div>
      );
    }
  }
  return <GSNtoSACM />;
};

export default GSNtoSACM;
