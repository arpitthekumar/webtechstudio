import type { InputLayer } from 'pcb-stackup';

export interface ExtendedLayer extends InputLayer {
  visible: boolean;
  opacity: number;
  color: string;
  svg?: string;
  side: 'top' | 'bottom' | 'inner';
  type: 'copper' | 'soldermask' | 'silkscreen' | 'drill' | 'paste' | 'outline' | 'ignore';
  filename: string;
}

export interface PCBColor {
  name: string;
  value: string;
  colors: {
    fr4: string;
    cu: string;
    cf: string;
    sm: string;
    ss: string;
    sp: string;
    out: string;
  };
} 