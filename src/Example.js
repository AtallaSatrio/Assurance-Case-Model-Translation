class DiagramApp extends Component {
  constructor(props) {
    super(props);

    var diagram = new mf.Diagramming.Diagram();
    diagram.setAllowInplaceEdit(true);
    // diagram.InplaceEditAcceptOnEnter(true);
    diagram.setLicenseLocation("./diagram_lic.txt");
    diagram.setDefaultShape("Rectangle");
    diagram.setLinkShape(mf.Diagramming.LinkShape.Polyline);
    diagram.invalidate();
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
      const node = new mf.Diagramming.SvgNode(diagram);
      node.setBounds(new cm.Drawing.Rect(25, 15, 60, 25));
      node.setContent(dict.content);
      shapeNodes.push(node);
      shapeIds.push(dict.name);
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

  arrangeDiagram(diagram) {
    var treeLayout = new mf.Graphs.TreeLayout();
    treeLayout.linkType = mf.Graphs.TreeLayoutLinkType.Polyline;
    diagram.arrange(treeLayout);
  }

  onSelectChange(event) {
    this.setState({
      behavior: +event.target.value,
    });
  }

  onSelectedLinkChanged(sender, args) {
    var selectedShape = args.getNode().getShape();
    this.state.diagram.setLinkHeadShape(selectedShape);
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
      else selectedNode.setEnabledHandles(mf.Diagramming.AdjustmentHandles.All);
    }
  }
  onDiagramLinkCreated2(sender, args) {
    // change the arrowhead shape
    var headShape = mf.Diagramming.Shape.fromId("Triangle");
    this.state.diagram.setLinkHeadShape(headShape);
    var link = this.state.diagram.links;
    link.label = "\u25AD";

    link.horihorizontalAlign = mf.Diagramming.Alignment.Center;
    var lab = "\u25AD";
    var label = args.link.addLabel(lab);
    label.brush = "white";
    var Font = mf.Drawing.Font;

    label.font = new Font("Roboto", 10);
    label.horizontalAlign = mf.Diagramming.Alignment.Center;
    label.verticalAlign = mf.Diagramming.Alignment.Center;
  }

  linkFunct(sender, args) {
    // change the arrowhead shape
    var headShape = mf.Diagramming.Shape.fromId("Arrow");
    this.state.diagram.setLinkHeadShape(headShape);
  }
  render() {
    var props = {
      id: "diagram1",
      backBrush: "white",
      behavior: this.state.behavior,
    };
    return (
      <div className="container">
        <div className="sidebar-left">
          <NodeListView
            style={{
              height: "800px",
            }}
            nodes={this.state.nodes}
            captions={this.state.captions}
          ></NodeListView>{" "}
        </div>{" "}
        <div className="main">
          <div className="topbar">
            <div>
              <select
                className="item"
                defaultValue="0"
                onChange={this.onSelectChange.bind(this)}
              >
                <option value="3">LinkShapes</option>
                <option value="4">one dot shape</option>
                <option value="10"> DrawContainer </option>{" "}
                <option value="5"> DrawTable </option>{" "}
                <option value="0"> Modify </option>{" "}
                <option value="12"> Pan </option>{" "}
              </select>{" "}
            </div>{" "}
            <div>
              <button
                className="item"
                id="lockItem"
                onClick={console.log(this.state.nodes[0].content.fileName)}
              >
                Lock / Unlock{" "}
              </button>{" "}
              <button
                className="button"
                id="test button"
                onClick={onTestBtnClick}
              >
                test button{" "}
              </button>{" "}
              <button className="button" id="test button" onClick={detail}>
                detail{" "}
              </button>{" "}
            </div>{" "}
          </div>
          <div className="diagram-area">
            <DiagramView
              diagram={this.state.diagram}
              {...props}
              onLeaveInplaceEditMode={(item, node) => {
                node.item.textColor = "black";
              }}
              onLinkCreated={(sender, args) => {
                var behave = this.state.behavior;
                if (behave == 4) {
                  this.onDiagramLinkCreated2(sender, args);
                } else if (behave == 3) {
                  this.linkFunct(sender, args);
                } else {
                  console.log("No");
                }
              }}
            />
          </div>{" "}
        </div>{" "}
        <div className="sidebar-left">
          <NodeListView
            onNodeSelected={(sender, args) => {
              this.onSelectedLinkChanged(sender, args);
            }}
            style={{
              height: "800px",
            }}
            nodes={this.state.linkNodes}
            captions={this.state.linkIds}
          ></NodeListView>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default DiagramApp;
