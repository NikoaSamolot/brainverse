/*
 BrainVerse — Crystal Obby: Extended
 Wszystkie definicje poziomów znajdują się w tym pliku.
 Aby dodać poziom, dopisz kolejny obiekt do tablicy CRYSTAL_MAPS.
 Funkcje platform, kryształów i przeszkód udostępnia silnik z index.html.
*/
window.CRYSTAL_MAPS = [
  {
    name: 'Crystal Obby: Extended',
    description: 'Długa trasa zygzakami, wspinaczką, laserami i ruchomymi pułapkami.',
    build: function (a) {
      const m=a.mats, route=[];
      function p(x,z,y,w=3.8,d=3.8,mat=m.platform,shape='octagon',crystal=true){
        const q=a.platform(x,z,y,w,d,mat,shape);route.push(q);if(crystal)a.crystalOn(q);return q;
      }
      const start=p(0,20,0,8,8,m.yellow);a.setSpawn(0,.02,20,0);
      const p1=p(0,14,.7,3.8,3.8,m.blue,'hex');
      const p2=p(3.8,10,1.4,3.4,3.4,m.green,'diamond');a.spinner(p2,3,2.3);
      p(7,5,2.1,4,4,m.purple);
      const p4=p(7,0,2.8,4.5,4.5,m.pink);a.tunnel(p4);
      const p5=p(3,-4,3.5,3.5,3.5,m.blue,'diamond');a.pendulum(p5,2.1,1.8);
      p(-1,-8,4.2,4,4,m.green);
      const p7=p(-4,-16,4.9,4,4,m.purple);a.checkpointAt(p7,'Most');
      const p8=p(-7,-21,5.6,3.7,3.7,m.blue,'diamond');a.spikes(p8,2.4,.8);
      const p9=p(-7,-26,6.3,4.5,4.5,m.yellow);a.laser(p9,2.8,1.8,2.5);
      p(-3,-30,7,3.5,3.5,m.green,'diamond');
      const p11=p(1,-34,7.7,4,4,m.pink);a.crusher(p11);
      p(5,-38,8.4,4.2,4.2,m.blue,'hex');
      const p13=p(8,-43,9.1,3.7,3.7,m.purple,'diamond');a.spinner(p13,3.1,3);
      p(5,-48,9.8,4,4,m.green);
      const p15=p(1,-52,10.5,4,4,m.yellow);a.checkpointAt(p15,'Wieża');
      for(let i=0;i<7;i++)p(-3-i*.65,-56-i*2.15,11.2+i*.42,2.9,2.9,[m.blue,m.purple,m.green][i%3],'diamond');
      const p16=p(-8,-72,14.3,4.4,4.4,m.pink);a.pendulum(p16,2.6,2.1);
      const p17=p(-4,-77,15,3.5,3.5,m.blue,'diamond');a.checkpointAt(p17,'Wieża II');
      p(0,-81,15.7,4,4,m.green);
      const p19=p(4,-85,16.4,3.5,3.5,m.yellow,'diamond');a.laser(p19,2.5,1.4,3.1);
      p(8,-90,17.1,4,4,m.purple);a.bridge(6,-96,17.8,8,1.05,'z',m.pink);
      const p21=p(8,-101,17.8,4,4,m.blue);a.checkpointAt(p21,'Most laserowy');
      const p22=p(4,-105,18.5,3.6,3.6,m.green,'diamond');a.spikes(p22,2.4,.7);
      const p23=p(0,-109,19.2,4,4,m.yellow);a.crusher(p23);
      p(-4,-113,19.9,3.6,3.6,m.purple,'diamond');
      const p25=p(-8,-118,20.6,4,4,m.blue);a.spinner(p25,3,3.2);
      p(-8,-123,21.3,4.5,4.5,m.green);p(-4,-127,22,3.5,3.5,m.pink,'diamond');p(0,-131,22.7,3.6,3.6,m.yellow,'diamond');
      const p29=p(4,-135,23.4,4,4,m.blue);a.pendulum(p29,2.5,2.5);
      const p30=p(8,-140,24.1,4,4,m.purple);a.checkpointAt(p30,'Kryształowa dolina');
      for(let i=0;i<12;i++){const x=8+(i%2===0?-1:1)*(3.5+Math.floor(i/2)*.18);const q=p(x,-145-i*4,24.8+i*.48,3.2,3.2,[m.yellow,m.green,m.blue,m.pink][i%4],'diamond');if(i%3===1)a.spinner(q,2.4,2.5+i*.04)}
      p(3,-191,30.2,4.2,4.2,m.blue,'round');const p31=p(-2,-195,30.8,4.6,4.6,m.yellow);a.checkpointAt(p31,'Zygzak');
      const p32=p(2,-200,31.5,3.5,3.5,m.blue,'diamond');a.laser(p32,2.6,1.7,2.6);
      p(6,-205,32.2,4,4,m.green);const p34=p(10,-210,32.9,3.5,3.5,m.purple,'diamond');a.crusher(p34);
      p(10,-215,33.6,4,4,m.pink);const p36=p(6,-220,34.3,3.5,3.5,m.yellow,'diamond');a.spikes(p36,2.5,.65);
      p(2,-225,35,4,4,m.blue);const p38=p(-2,-230,35.7,4,4,m.green);a.spinner(p38,3.1,3.3);
      p(-6,-235,36.4,3.5,3.5,m.purple,'diamond');const p40=p(-10,-240,37.1,4.5,4.5,m.yellow);a.checkpointAt(p40,'Ostatni etap');
      const moving1=a.platform(-6,-245,37.8,3.2,3.2,m.blue,'round');a.crystalOn(moving1);a.movingPlatform(moving1,1.6,0,1.1);
      const moving2=a.platform(-2,-250,38.5,3.2,3.2,m.pink,'round');a.crystalOn(moving2);a.movingPlatform(moving2,0,1.5,1.3);
      const p41=p(2,-255,39.2,3.8,3.8,m.green);a.pendulum(p41,2.6,2.8);
      const p42=p(6,-260,39.9,4,4,m.blue);a.laser(p42,2.7,1.5,3.2);
      const p43=p(10,-265,40.6,4,4,m.purple);a.spinner(p43,3.1,3.4);
      const finish=p(10,-271,41.3,8,8,m.yellow);a.setFinish(finish);
      a.solid(finish.x-1.7,finish.top,finish.z-1.5,.32,2.6,.32,m.purple);a.solid(finish.x+1.7,finish.top,finish.z-1.5,.32,2.6,.32,m.purple);a.solid(finish.x,finish.top+2.3,finish.z-1.5,3.7,.32,.32,m.green);
    }
  },
  {
    name: 'Skyline Climb',
    description: 'Drugi poziom: pionowa wspinaczka, szersze platformy, ruchome podesty i wieża finałowa.',
    build: function (a) {
      const m=a.mats;
      function p(x,z,y,w=4,d=4,mat=m.blue,shape='octagon',crystal=true){const q=a.platform(x,z,y,w,d,mat,shape);if(crystal)a.crystalOn(q);return q}
      a.setSpawn(0,.02,18,0);
      p(0,18,0,8,8,m.yellow);p(0,12,.8,4.5,4,m.blue,'hex');
      let q=p(4,8,1.6,4.5,4,m.green,'diamond');a.spinner(q,3.5,2.4);
      p(8,4,2.5,5,4,m.purple);q=p(8,-2,3.4,4,4,m.pink);a.checkpointAt(q,'Półka startowa');
      a.bridge(4,-6,4.3,7,1.5,'z',m.blue);
      q=p(0,-11,5.2,5,5,m.yellow);a.pendulum(q,2.5,1.8);
      p(-4,-15,6.1,4,4,m.green,'diamond');q=p(-8,-19,7,4.5,4.5,m.blue);a.laser(q,3,1.5,2.4);
      p(-8,-25,8,5,5,m.purple);q=p(-4,-29,9.1,4,4,m.pink);a.checkpointAt(q,'Wieża dolna');
      for(let i=0;i<8;i++){const x=-2+(i%2)*4,z=-34-i*4.1,y=10+i*1.25;const t=p(x,z,y,3.8,3.8,[m.blue,m.green,m.yellow,m.purple][i%4],'diamond');if(i===2)a.spikes(t,2.3,.7);if(i===5)a.crusher(t)}
      q=p(4,-68,20.5,5,5,m.green);a.spinner(q,3.4,3.1);q=p(8,-73,21.5,4.5,4.5,m.pink);a.checkpointAt(q,'Półmetek');
      const m1=a.platform(8,-79,22.5,3.6,3.6,m.blue,'round');a.crystalOn(m1);a.movingPlatform(m1,2.4,0,1.1);
      const m2=a.platform(3,-83,23.5,3.6,3.6,m.purple,'round');a.crystalOn(m2);a.movingPlatform(m2,0,2,1.3);
      q=p(-2,-87,24.5,4.5,4.5,m.yellow);a.pendulum(q,2.8,2.5);
      for(let i=0;i<7;i++){const x=-5+(i%2)*4,z=-92-i*4.2,y=25.5+i*1.35;const t=p(x,z,y,3.8,3.8,[m.pink,m.blue,m.green][i%3],'diamond');if(i===3)a.laser(t,2.7,1.5,3)}
      q=p(3,-123,35,5,5,m.purple);a.checkpointAt(q,'Wieża górna');a.bridge(5,-129,36,7,1.35,'z',m.pink);
      q=p(7,-134,37,4.5,4.5,m.green);a.spikes(q,2.7,.7);q=p(3,-138,38,4.5,4.5,m.blue);a.crusher(q);
      q=p(-1,-142,39,4.5,4.5,m.yellow);a.spinner(q,3.2,3.4);p(-5,-146,40,4,4,m.purple,'diamond');
      const finish=p(-5,-152,41,8,8,m.yellow);a.setFinish(finish);a.solid(-6.7,41,finish.z-1.5,.32,2.6,.32,m.purple);a.solid(-3.3,41,finish.z-1.5,.32,2.6,.32,m.purple);a.solid(-5,43.3,finish.z-1.5,3.7,.32,.32,m.green);
    }
  },
  {
    name: 'Lava Sprint',
    description: 'Trzeci poziom: szybki tor nad lawą z krótkimi skokami, kolcami i spinnerami.',
    build: function (a) {
      const m=a.mats;
      function p(x,z,y,w=3.7,d=3.7,mat=m.platform,shape='diamond'){const q=a.platform(x,z,y,w,d,mat,shape);a.crystalOn(q);return q}
      a.setSpawn(0,.02,18,0);p(0,18,0,8,8,m.yellow,'octagon');
      p(0,12,.55,3.8,3.8,m.blue,'hex');let q=p(3.5,8,1.1);a.spinner(q,3.2,3);
      p(6.5,4,1.7,4.2,4.2,m.green,'diamond');q=p(6.5,0,2.3,4.5,4.5,m.purple,'octagon');a.checkpointAt(q,'Pierwszy zakręt');
      q=p(2,-4,2.9);a.spikes(q,2.5,.7);p(-2,-8,3.5,4,4,m.pink,'diamond');
      q=p(-6,-12,4.1,4.5,4.5,m.blue,'octagon');a.laser(q,3,1.5,3.1);
      p(-6,-17,4.7,3.8,3.8,m.green,'diamond');q=p(-2,-21,5.3,4.5,4.5,m.yellow);a.crusher(q);
      p(2,-25,5.9,3.8,3.8,m.purple,'diamond');q=p(6,-29,6.5,4.5,4.5,m.blue);a.checkpointAt(q,'Sprint środkowy');
      for(let i=0;i<10;i++){const x=6+(i%2===0?-1:1)*3.8,z=-34-i*4.2,y=7.1+i*.55;const t=p(x,z,y,3.4,3.4,[m.green,m.pink,m.yellow,m.blue][i%4],'diamond');if(i%3===0)a.spinner(t,2.8,3.2);if(i===5)a.pendulum(t,2.3,2.4)}
      q=p(-2,-77,13,5,5,m.purple);a.checkpointAt(q,'Ostatnia prosta');a.bridge(-4,-82,13.5,7,1.2,'z',m.blue);
      q=p(-6,-87,14,4.5,4.5,m.green);a.laser(q,2.8,1.4,3.3);p(-2,-91,14.6,4,4,m.pink,'diamond');q=p(2,-95,15.2,4.5,4.5,m.blue);a.spinner(q,3.4,3.6);
      const finish=p(2,-101,15.8,8,8,m.yellow,'octagon');a.setFinish(finish);a.solid(.3,15.8,finish.z-1.5,.32,2.6,.32,m.purple);a.solid(3.7,15.8,finish.z-1.5,.32,2.6,.32,m.purple);a.solid(2,18.1,finish.z-1.5,3.7,.32,.32,m.green);
    }
  }
];
