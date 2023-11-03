import Phaser from 'phaser';

import burst1 from './assets/sprites/blue.png';
import burst2 from './assets/sprites/green-simple.png';
import burst3 from './assets/sprites/purpleSmall.png.png';
import burst4 from './assets/sprites/redNormal.png.png';
import burst5 from './assets/sprites/Fire_Burst_v4_spritesheet.png';
import impact1 from './assets/sprites/Impact_Cartoon Hit_V4_B_spritesheet.png';
import impact2 from './assets/sprites/Impact_Cut_V1_spritesheet.png';
import impact3 from './assets/sprites/Impact_Fire_Lv1_spritesheet.png';
import impact4 from './assets/sprites/Impact_Hit_Lv2_spritesheet.png';
import impact5 from './assets/sprites/Impact_Shine_V2_spritesheet.png';
import impact6 from './assets/sprites/Impact_Shockwave v2_spritesheet.png';
import particles1 from './assets/sprites/Particles_Basic_V4_spritesheet.png';
import particles2 from './assets/sprites/Star_Bursts_V4_spritesheet.png';

import bonfire from './assets/sprites/bonfire_sheet.png';
import fireball from './assets/sprites/fireball_sheet.png';
import fireball_blue from './assets/sprites/fireball_blue_sheet.png';
import fireball_pink from './assets/sprites/fireball_pink_sheet.png';
import flamethrower from './assets/sprites/flamethrower_sheet.png';
import wind from './assets/sprites/impact_wind_white_sheet.png';
import power_burst from './assets/sprites/power_burst_star_sheet.png';
import star_flash from './assets/sprites/star_flash_sheet.png';
import water1 from './assets/sprites/water_burst_sheet.png';
import water2 from './assets/sprites/water_burst2_sheet.png';
import water_purple from './assets/sprites/water_burst_purple_sheet.png';
import star_blue from './assets/sprites/star_bursts_blue_sheet.png';

import glow_wheel_sheet from './assets/atlas/glow_wheel.png';
import glow_wheel_json from './assets/atlas/glow_wheel.json';
class MyVFX extends Phaser.Scene
{
    constructor ()
    {
        super('MyVFX');
    }

    preload ()
    {
        // this.load.image('burst1', burst1);
        this.load.spritesheet('blueFlame_spritesheet', burst1, { frameWidth: 100, frameHeight: 100 });
        this.load.spritesheet('greenFlame_spritesheet', burst2, { frameWidth: 100, frameHeight: 100 });
        this.load.spritesheet('purpleFlame_spritesheet', burst3, { frameWidth: 100, frameHeight: 100, endframe: 40, padding: 10 });
        this.load.spritesheet('redFlame_spritesheet', burst4, { frameWidth: 100, frameHeight: 100 });

        this.load.spritesheet('burst5_sheet', burst5, { frameWidth: 512, frameHeight: 512, endframe: 63 });
        this.load.spritesheet('impact1_sheet', impact1, { frameWidth: 512, frameHeight: 512, endframe: 16 });
        this.load.spritesheet('impact2_sheet', impact2, { frameWidth: 512, frameHeight: 512, endframe: 63 });
        this.load.spritesheet('impact3_sheet', impact3, { frameWidth: 512, frameHeight: 512, endframe: 63 });
        this.load.spritesheet('impact4_sheet', impact4, { frameWidth: 512, frameHeight: 512, endframe: 16 });
        this.load.spritesheet('impact5_sheet', impact5, { frameWidth: 512, frameHeight: 512, endframe: 16 });
        this.load.spritesheet('impact6_sheet', impact6, { frameWidth: 512, frameHeight: 512, endframe: 16 });
        this.load.spritesheet('particles1_sheet', particles1, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.spritesheet('particles2_sheet', particles2, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.atlas('glow_wheel_atlas', glow_wheel_sheet, glow_wheel_json);

        this.load.spritesheet('bonfire1_sheet', bonfire, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.spritesheet('fireball_sheet', fireball, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.spritesheet('flamethrower_sheet', flamethrower, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.spritesheet('wind_sheet', wind, { frameWidth: 512, frameHeight: 512, endframe: 16 });
        this.load.spritesheet('power_burst_sheet', power_burst, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.spritesheet('star_flash_sheet', star_flash, { frameWidth: 512, frameHeight: 512, endframe: 16 });
        this.load.spritesheet('water1_sheet', water1, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.spritesheet('water2_sheet', water2, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.spritesheet('star_blue_sheet', star_blue, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.spritesheet('fireball_blue_sheet', fireball_blue, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.spritesheet('fireball_pink_sheet', fireball_pink, { frameWidth: 512, frameHeight: 512, endframe: 64 });
        this.load.spritesheet('water_purple_sheet', water_purple, { frameWidth: 512, frameHeight: 512, endframe: 64 });
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

        //water burst purple
        this.createAnimation('water_purple_sheet', 64, 30, -1);
        const water_purple_sprite = this.add.sprite(1600, 600, 'water_purple_sheet')
        //water_purple_sprite.setScale(2);
        water_purple_sprite.play('water_purple_sheet_ani');

        //fireball demo
        this.createAnimation('fireball_blue_sheet', 64, 30, -1);
        const fireball_blue_sprite = this.add.sprite(1600, 200, 'fireball_blue_sheet')
        //fireball_blue_sprite.setScale(2);
        fireball_blue_sprite.play('fireball_blue_sheet_ani');

        //fireball demo pink
        this.createAnimation('fireball_pink_sheet', 64, 30, -1);
        const fireball_pink_sprite = this.add.sprite(1800, 200, 'fireball_pink_sheet')
        //fireball_pink_sprite.setScale(2);
        fireball_pink_sprite.play('fireball_pink_sheet_ani');

        //star burst demo
        this.createAnimation('star_blue_sheet', 64, 30, -1);
        const star_blue_sprite = this.add.sprite(1600, 850, 'star_blue_sheet')
        //star_blue_sprite.setScale(2);
        star_blue_sprite.play('star_blue_sheet_ani');

        //water2 burst demo
        this.createAnimation('water2_sheet', 64, 30, -1);
        const water2_sprite = this.add.sprite(460, 850, 'water2_sheet')
        //water2_sprite.setScale(2);
        water2_sprite.play('water2_sheet_ani');

        //water burst demo
        this.createAnimation('water1_sheet', 64, 30, -1);
        const water1_sprite = this.add.sprite(160, 850, 'water1_sheet')
        //water1_sprite.setScale(2);
        water1_sprite.play('water1_sheet_ani');

        //star flash demo
        this.createAnimation('star_flash_sheet', 16, 30, -1);
        const star_flash_sprite = this.add.sprite(1400, 200, 'star_flash_sheet')
        //star_flash_sprite.setScale(2);
        star_flash_sprite.play('star_flash_sheet_ani');

        //power burst demo
        this.createAnimation('power_burst_sheet', 64, 30, -1);
        const power_burst_sprite = this.add.sprite(1020, 800, 'power_burst_sheet')
        //power_burst_sprite.setScale(2);
        power_burst_sprite.play('power_burst_sheet_ani');

        //wind demo
        this.createAnimation('wind_sheet', 16, 30, -1);
        const wind_sprite = this.add.sprite(1024, 600, 'wind_sheet')
        //wind_sprite.setScale(2);
        wind_sprite.play('wind_sheet_ani');

        //flamethrower demo
        this.createAnimation('flamethrower_sheet', 64, 30, -1);
        const flamethrower_sprite = this.add.sprite(1224, 400, 'flamethrower_sheet')
        //flamethrower_sprite.setScale(2);
        flamethrower_sprite.play('flamethrower_sheet_ani');

        //fire burst demo
        this.createAnimation('fireball_sheet', 64, 30, -1);
        const fire_burst = this.add.sprite(1224, 120, 'fireball_sheet');
        //fire_burst.setScale(0.5);
        fire_burst.play('fireball_sheet_ani');

        //bonfire
        this.createAnimation('bonfire1_sheet', 64, 30, -1);
        const bonfire1 = this.add.sprite(900, 100, 'bonfire1_sheet');
        //bonfire1.setScale(0.5);
        bonfire1.play('bonfire1_sheet_ani');

        //glow wheel demo
        this.anims.create({key: 'glow_wheel_ani', frames: this.anims.generateFrameNames('glow_wheel_atlas', { prefix: 'Frame_', start: 0, end: 92, zeroPad: 3, suffix: '.png' }), frameRate: 30, repeat: -1});
        const glow_wheel = this.add.sprite(300, 400, 'glow_wheel');
        glow_wheel.setScale(0.5);
        glow_wheel.play('glow_wheel_ani');

        //burst5 demo
        this.createAnimation('burst5_sheet', 64, 30, -1);
        const burst5_sprite = this.add.sprite(140, 200, 'burst5_sheet')
        //burst5_sprite.setScale(2);
        burst5_sprite.play('burst5_sheet_ani');

        //impact1 demo
        this.createAnimation('impact1_sheet', 16, 30, -1);
        const impact1_sprite = this.add.sprite(400, 200, 'impact1_sheet')
        //impact1_sprite.setScale(2);
        impact1_sprite.play('impact1_sheet_ani');

        //impact2 demo
        this.createAnimation('impact2_sheet', 64, 30, -1);
        const impact2_sprite = this.add.sprite(700, 200, 'impact2_sheet')
        //impact2_sprite.setScale(2);
        impact2_sprite.play('impact2_sheet_ani');

        //impact3 demo
        this.createAnimation('impact3_sheet', 64, 30, -1);
        const impact3_sprite = this.add.sprite(160, 400, 'impact3_sheet')
        //impact3_sprite.setScale(2);
        impact3_sprite.play('impact3_sheet_ani');

        //impact4 demo
        this.createAnimation('impact4_sheet', 16, 30, -1);
        const impact4_sprite = this.add.sprite(400, 400, 'impact4_sheet')
        //impact4_sprite.setScale(2);
        impact4_sprite.play('impact4_sheet_ani');

        //impact5 demo
        this.createAnimation('impact5_sheet', 16, 30, -1);
        const impact5_sprite = this.add.sprite(700, 400, 'impact5_sheet')
        //impact5_sprite.setScale(2);
        impact5_sprite.play('impact5_sheet_ani');

        //impact6 demo
        this.createAnimation('impact6_sheet', 16, 30, -1);
        const impact6_sprite = this.add.sprite(200, 600, 'impact6_sheet')
        //impact6_sprite.setScale(2);
        impact6_sprite.play('impact6_sheet_ani');


        //particles1 demo
        this.createAnimation('particles1_sheet', 64, 30, -1);
        const particles1_sprite = this.add.sprite(500, 600, 'particles1_sheet')
        //particles1_sprite.setScale(2);
        particles1_sprite.play('particles1_sheet_ani');

        //particles2 demo
        this.createAnimation('particles2_sheet', 64, 30, -1);
        const particles2_sprite = this.add.sprite(800, 600, 'particles2_sheet')
        //particles2_sprite.setScale(2);
        particles2_sprite.play('particles2_sheet_ani');


        // //Single burst demo
        this.createAnimation('blueFlame_spritesheet', 64, 30, -1);
        const burst1_sprite = this.add.sprite(200, 100, 'blueFlame_spritesheet')
        //burst1_sprite.setScale(2);
        burst1_sprite.play('blueFlame_spritesheet_ani');

        this.createAnimation('greenFlame_spritesheet', 29, 29, -1);
        const burst2_sprite = this.add.sprite(400, 100, 'greenFlame_spritesheet')
        //burst2_sprite.setScale(8);
        burst2_sprite.play('greenFlame_spritesheet_ani');

        this.createAnimation('purpleFlame_spritesheet', 39, 30, -1);
        const burst3_sprite = this.add.sprite(500, 140, 'purpleFlame_spritesheet')
        burst3_sprite.setScale(2);
        burst3_sprite.play('purpleFlame_spritesheet_ani');

        this.createAnimation('redFlame_spritesheet', 64, 30, -1);
        const burst4_sprite = this.add.sprite(600, 140, 'redFlame_spritesheet')
        //burst4_sprite.setScale(2);
        burst4_sprite.play('redFlame_spritesheet_ani');

        //cluster burst demo
        // const blueContainer = this.add.container(100, 400);
        // for (let i = 0; i < 4; i++) {
        //     blueContainer.add(this.add.sprite(i * 20, Math.random()*10, 'blueFlame_spritesheet'))
        //     blueContainer.list[i].setScale(Math.random() * 2 + 0.7);
        //     blueContainer.list[i].play('blueFlame_spritesheet_ani');
        // }

        // const greenContainer = this.add.container(300, 400);
        // for (let i = 0; i < 6; i++) {
        //     greenContainer.add(this.add.sprite(i * 15, Math.random()*10, 'greenFlame_spritesheet'))
        //     greenContainer.list[i].setScale(Math.random() * 2 + 0.7);
        //     greenContainer.list[i].play('greenFlame_spritesheet_ani');
        // }

        // const purpleContainer = this.add.container(500, 400);
        // for (let i = 0; i < 8; i++) {
        //     purpleContainer.add(this.add.sprite(i * 8, Math.random()*20, 'purpleFlame_spritesheet'))
        //     purpleContainer.list[i].setScale(Math.random() * 2 + 2);
        //     purpleContainer.list[i].play('purpleFlame_spritesheet_ani');
        // }

        // const redContainer = this.add.container(700, 400);
        // for (let i = 0; i < 4; i++) {
        //     redContainer.add(this.add.sprite(i * 14, Math.random()*30, 'redFlame_spritesheet'))
        //     redContainer.list[i].setScale(Math.random() * 2 + 0.7);
        //     redContainer.list[i].play('redFlame_spritesheet_ani');
        // }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backGroundColor: '#00FF00',
    scale: {
        mode: Phaser.Scale.Fit,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'phaser-example',
        width: 1920,
        height: 1080,
    },
    scene: MyVFX
};

const game = new Phaser.Game(config);
