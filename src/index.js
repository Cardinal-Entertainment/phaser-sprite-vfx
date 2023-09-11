import Phaser from 'phaser';
import logoImg from './assets/logo.png';

import burst1 from './assets/sprites/blue.png';
import burst2 from './assets/sprites/greenSimple.png.png';
import burst3 from './assets/sprites/purpleSmall.png.png';
import burst4 from './assets/sprites/redNormal.png.png';
// import burst3 from './assets/logo.png';
// import burst4 from './assets/logo.png';
class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.image('burst1', burst1);
        this.load.spritesheet('burst1_spritesheet', burst1, { frameWidth: 100, frameHeight: 100, endframe: 65 });
        this.load.spritesheet('burst2_spritesheet', burst2, { frameWidth: 100, frameHeight: 100, endframe: 30 });
        this.load.spritesheet('burst3_spritesheet', burst3, { frameWidth: 100, frameHeight: 100, endframe: 40, padding: 10 });
        this.load.spritesheet('burst4_spritesheet', burst4, { frameWidth: 100, frameHeight: 100, endframe: 65 });
    }
      
    create ()
    {
        const config1 = {
            key: 'explodeAnimation',
            frames: this.anims.generateFrameNumbers('burst1_spritesheet', { start: 0, end: 64 }),
            frameRate: 30,
            repeat: -1
        };
        this.anims.create(config1);
       const burst1_sprite = this.add.sprite(200, 100, 'burst1_spritesheet')
       burst1_sprite.setScale(2);
       burst1_sprite.play('explodeAnimation');

       const config2 = {
        key: 'explode2Animation',
        frames: this.anims.generateFrameNumbers('burst2_spritesheet', { start: 0, end: 29 }),
        frameRate: 30,
        repeat: -1
    };
    this.anims.create(config2);
   const burst2_sprite = this.add.sprite(400, 100, 'burst2_spritesheet')
   burst2_sprite.setScale(2);
   burst2_sprite.play('explode2Animation');

    const config3 = {
            key: 'explode3Animation',
            frames: this.anims.generateFrameNumbers('burst3_spritesheet', { start: 0, end: 39 }),
            frameRate: 30,
            repeat: -1
        };
        this.anims.create(config3);
        const burst3_sprite = this.add.sprite(500, 140, 'burst3_spritesheet')
        burst3_sprite.setScale(2);
        burst3_sprite.play('explode3Animation');

        const config4 = {
            key: 'explode4Animation',
            frames: this.anims.generateFrameNumbers('burst4_spritesheet', { start:0, end: 64 }),
            frameRate: 30,
            repeat: -1
        };
        this.anims.create(config4);
        const burst4_sprite = this.add.sprite(600, 140, 'burst4_spritesheet')
        burst4_sprite.setScale(2);
        burst4_sprite.play('explode4Animation');
      
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1024,
    height: 768,
    scene: MyGame
};

const game = new Phaser.Game(config);
