declare module 'pcb-stackup' {
  export interface InputLayer {
    filename?: string;
    content: string;
    type?: string;
  }

  export interface StackupLayer {
    svg: string;
    width?: number;
    height?: number;
  }

  export interface StackupResult {
    top?: StackupLayer;
    bottom?: StackupLayer;
    layers?: Array<{
      filename: string;
      svg: string;
    }>;
  }

  export default function stackup(
    layers: InputLayer[],
    options?: {
      color?: {
        fr4?: string;
        cu?: string;
        cf?: string;
        sm?: string;
        ss?: string;
        sp?: string;
        out?: string;
      };
    }
  ): Promise<StackupResult>;
} 