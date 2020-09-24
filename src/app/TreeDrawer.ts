import {Node} from "./NewickParser";

export interface DrawOptions {
  r: number;   //初始半径
  n: number;  //每圈节点数
  k: number;  //每圈半径留存率
  s: number; //节点内步数
  beta: number; //辅枝半径占比
  maxDepth: number; //最大深度
  w: number; //初始宽度
}

export class TreeDrawer {
  private _context: CanvasRenderingContext2D;
  private readonly _r: number;   //初始半径
  private readonly _dPhi: number;  //每步旋转角度
  private readonly _dk: number;   //单步半径留存率
  private readonly _beta: number;  //辅枝半径占比
  private readonly _maxDepth: number;//最大深度
  private readonly _s: number; //节点内步数
  private readonly _w: number;//初始宽度

  constructor(context: CanvasRenderingContext2D, options: DrawOptions) {
    this._context = context;
    this._r = options.r;
    this._dPhi = 2 * Math.PI / (options.n * options.s);
    this._dk = Math.pow(options.k, 1 / (options.n * options.s));
    this._beta = options.beta;
    this._s = options.s;
    this._maxDepth = options.maxDepth;
    this._w = options.w;
    window.requestAnimationFrame(a =>{

    })
  }

  draw(root: Node) {

    if (root == null) return null;
    this._context.lineCap = 'round';
    this.drawRecursive(this.aggregateRecursive(root, 0), this._r, true);


  }

  private aggregateRecursive(node: Node, depth: number): InfoNode {
    let childCount = node.children?.length ?? 0;
    if (childCount !== 0 && childCount !== 2) {
      throw new Error('children length should be  equal to 0 or 2.')
    }
    if (childCount === 0 || depth === this._maxDepth) {
      return {
        name: node.name,
        distance: node.distance,
        depth: depth,
        isLeaf: true,
        clockwise: null,
        primeBranch: null,
        secondaryBranch: null,
        descendantTotal: 1,
      };
    }
    let child0 = this.aggregateRecursive(node.children[0], depth + 1);
    let child1 = this.aggregateRecursive(node.children[1], depth + 1);
    let descendantTotal = child0.descendantTotal + child1.descendantTotal;

    return {
      name: node.name,
      distance: node.distance,
      depth: depth,
      isLeaf: false,
      clockwise: null,
      primeBranch: child0.descendantTotal >= child1.descendantTotal ? child0 : child1,
      secondaryBranch: child0.descendantTotal < child1.descendantTotal ? child0 : child1,
      descendantTotal: descendantTotal,
    };
  }

  private drawRecursive(node: InfoNode, r: number, clockwise: boolean): void {
    if (node.isLeaf) {
      return;
    }
    if (r < 1) return;

    this._context.save();
    const pnr = this.drawSteps(r, clockwise);
    this.drawRecursive(node.primeBranch, pnr, clockwise);
    this._context.restore();

    this._context.save();
    const sr = r * this._beta;
    const snr = this.drawSteps(sr, !clockwise);
    this.drawRecursive(node.secondaryBranch, snr, !clockwise);
    this._context.restore();
  }

  private drawSteps(r: number, clockwise: boolean): number {
    const factor = clockwise ? 1 : -1;
    for (let i = 0; i < this._s; i++) {
      this._context.lineWidth = this._w * r / this._r;
      this._context.beginPath()
      this._context.moveTo(0, 0);
      this._context.translate(r * factor, 0);
      this._context.rotate(this._dPhi * factor);
      r = r * this._dk;
      this._context.translate(-r * factor, 0);
      this._context.lineTo(0, 0);
      this._context.stroke();
    }
    return r;
  }
}


export interface InfoNode {
  name: string;
  distance: number;
  depth: number;
  isLeaf: boolean;
  clockwise: boolean;
  primeBranch: InfoNode;
  secondaryBranch: InfoNode;
  descendantTotal: number;
}
