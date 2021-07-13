import { ResponsivePie } from "@nivo/pie";

const margin = { top: 50, right: 110, bottom: 50, left: 70 };

const styles = {
  root: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    position: "relative",
    width: 600,
    height: 400
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: margin.right,
    bottom: 0,
    left: margin.left,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
    textAlign: "center",
    // This is important to preserve the chart interactivity
    pointerEvents: "none"
  },
  largefont: {
    fontSize: 20,
    marginBottom: 20
  },
  smallfont: {
    fontSize: 15
  }
};

const data = [
  {
    id: "Carbs from drinks",
    label: "Drinks",
    value: 350
  },
  {
    id: "Carbs from food",
    label: "Food",
    value: 400
  }
];

const theme = {
  background: "#ffffff",
  textColor: "#333333",
  fontSize: 15,
  grid: {
    line: {
      stroke: "#555555"
    }
  }
};

const legends = [
  {
    anchor: "right",
    direction: "column",
    justify: false,
    translateX: 100,
    translateY: 100,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 0.85,
    itemTextColor: "#000000",
    symbolSize: 20,
    effects: [
      {
        on: "hover",
        style: {
          itemOpacity: 1
        }
      }
    ]
  }
];

const PieNivo = () => (
    <div style={styles.root}>
      <ResponsivePie
          margin={margin}
          data={data}
          colors={{ scheme: 'set1' }}
          arcLinkLabelsStraightLength={1}
          arcLinkLabelsTextOffset={1}
          activeOuterRadiusOffset={5}
          innerRadius={0.8}
          enableRadialLabels={false}
          enableSlicesLabels={false}
          theme={theme}
          legends={legends}
      />
      <div style={styles.overlay}>
        <span style={styles.smallfont}>700g / 200kj</span>
        <span style={styles.largefont}>Carbs needed</span>
        <span style={styles.smallfont}>800</span>
        <span style={styles.largefont}>Total calories</span>
      </div>
    </div>
);

export default PieNivo
