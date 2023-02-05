export interface point {
  ticket: string;
  ticketTitle: string;
  ticketStatus: string;
  estimate: number;
  real: number;
  isRed: boolean;
}
export interface Member {
  ticket: string;
  ticketTitle: string;
  name: string;
  times_channel_id: string;
  point: point[];
  pointT: {
    estimate: number;
    real: number;
    pointTIsRed: boolean;
  };
}
