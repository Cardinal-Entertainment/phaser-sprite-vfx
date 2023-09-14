import Phaser from 'phaser';

import burst1 from './assets/sprites/blue.png';
import burst2 from './assets/sprites/greenSimple.png.png';
import burst3 from './assets/sprites/purpleSmall.png.png';
import burst4 from './assets/sprites/redNormal.png.png';
class MyVFX extends Phaser.Scene
{
    constructor ()
    {
        super('MyVFX');
    }

    preload ()
    {
        // this.load.image('burst1', burst1);
        this.load.spritesheet('blueFlame_spritesheet', burst1, { frameWidth: 100, frameHeight: 100, endframe: 65 });
        this.load.spritesheet('greenFlame_spritesheet', burst2, { frameWidth: 100, frameHeight: 100, endframe: 30 });
        this.load.spritesheet('purpleFlame_spritesheet', burst3, { frameWidth: 100, frameHeight: 100, endframe: 40, padding: 10 });
        this.load.spritesheet('redFlame_spritesheet', burst4, { frameWidth: 100, frameHeight: 100, endframe: 65 });
    }

    createAnimation (spritesheet, frames, frameRate, repeat = -1)
    {
        this.anims.create({
            key: spritesheet + '_ani',
            frames: this.anims.generateFrameNumbers(spritesheet, { start: 0, end: frames }),
            frameRate: frameRate,
            repeat: repeat
        });
    }
      
    create ()
    {
        //Single burst demo
        this.createAnimation('blueFlame_spritesheet', 65, 30, -1);
        const burst1_sprite = this.add.sprite(200, 100, 'blueFlame_spritesheet')
        burst1_sprite.setScale(2);
        burst1_sprite.play('blueFlame_spritesheet_ani');

        this.createAnimation('greenFlame_spritesheet', 30, 30, -1);
        const burst2_sprite = this.add.sprite(400, 100, 'greenFlame_spritesheet')
        burst2_sprite.setScale(2);
        burst2_sprite.play('greenFlame_spritesheet_ani');

        this.createAnimation('purpleFlame_spritesheet', 40, 30, -1);
        const burst3_sprite = this.add.sprite(500, 140, 'purpleFlame_spritesheet')
        burst3_sprite.setScale(2);
        burst3_sprite.play('purpleFlame_spritesheet_ani');

        this.createAnimation('redFlame_spritesheet', 65, 30, -1);
        const burst4_sprite = this.add.sprite(600, 140, 'redFlame_spritesheet')
        burst4_sprite.setScale(2);
        burst4_sprite.play('redFlame_spritesheet_ani');

        //cluster burst demo
        const blueContainer = this.add.container(100, 400);
        for (let i = 0; i < 4; i++) {
            blueContainer.add(this.add.sprite(i * 20, Math.random()*10, 'blueFlame_spritesheet'))
            blueContainer.list[i].setScale(Math.random() * 2 + 0.7);
            blueContainer.list[i].play('blueFlame_spritesheet_ani');
        }

        const greenContainer = this.add.container(300, 400);
        for (let i = 0; i < 6; i++) {
            greenContainer.add(this.add.sprite(i * 15, Math.random()*10, 'greenFlame_spritesheet'))
            greenContainer.list[i].setScale(Math.random() * 2 + 0.7);
            greenContainer.list[i].play('greenFlame_spritesheet_ani');
        }

        const purpleContainer = this.add.container(500, 400);
        for (let i = 0; i < 8; i++) {
            purpleContainer.add(this.add.sprite(i * 8, Math.random()*20, 'purpleFlame_spritesheet'))
            purpleContainer.list[i].setScale(Math.random() * 2 + 2);
            purpleContainer.list[i].play('purpleFlame_spritesheet_ani');
        }

        const redContainer = this.add.container(700, 400);
        for (let i = 0; i < 4; i++) {
            redContainer.add(this.add.sprite(i * 14, Math.random()*30, 'redFlame_spritesheet'))
            redContainer.list[i].setScale(Math.random() * 2 + 0.7);
            redContainer.list[i].play('redFlame_spritesheet_ani');
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1024,
    height: 768,
    scene: MyVFX
};

const game = new Phaser.Game(config);
