interface ControleRemoto {
  play(): void;
  pause(): void;
}

interface ControleSom extends ControleRemoto {
  mudarRadio(): void;
}

class Blueray implements ControleRemoto {
  play(): void {}
  pause(): void {}
}

export class Som implements ControleSom {
  play(): void {}
  pause(): void {}
  mudarRadio(): void {}
}
