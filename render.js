'use strict';
class FarmRenderer {
constructor(canvas){this.c=canvas;this.ctx=canvas.getContext('2d');}
draw(game,t,player,route){const c=this.ctx,s=game.s,T=40; c.imageSmoothingEnabled=false;
const rect=(x,y,w,h,col)=>{c.fillStyle=col;c.fillRect(Math.round(x),Math.round(y),w,h);};
const text=(txt,x,y,size=12,color='#fff3cf')=>{c.font=`bold ${size}px monospace`;c.textAlign='center';c.fillStyle='#243d36';c.fillRect(x-c.measureText(txt).width/2-5,y-size,c.measureText(txt).width+10,size+6);c.fillStyle=color;c.fillText(txt,x,y);};
const season=game.season(),grass=season==='Autumn'?'#a5ac65':season==='Winter'?'#bbd4bc':'#83ae6e';rect(0,0,960,720,grass);
for(let y=0;y<18;y++)for(let x=0;x<24;x++){const h=(x*73+y*139)%29;rect(x*T+7+h/3,y*T+10+h/2,3,5,season==='Winter'?'#dbe5cf':'#759f60');if(h<7){rect(x*T+26,y*T+23,3,3,'#e5d78d');rect(x*T+28,y*T+22,2,2,'#eaddac');}}
// River, paths, and rippling water.
rect(752,0,208,720,'#c0c794');rect(768,0,192,720,'#6bada9');for(let i=0;i<60;i++){const x=780+(i*59)%172,y=(i*97+t*9)%720;rect(x,y,10+(i%3)*5,2,'#93c9bf');}
for(const [x,y,w,h] of [[1,6,18,1],[7,2,1,15],[11,10,8,1],[12,5,1,8],[3,12,16,1]]){rect(x*T,y*T,w*T,h*T,'#cfbd8a');for(let k=0;k<w*h*4;k++)rect(x*T+(k*53)%(w*T),y*T+(k*29)%(h*T),5,2,'#b9a975');}
rect(18*T,12*T,4*T,33,'#916f4e');for(let i=0;i<15;i++)rect(720+i*11,480,2,33,'#b9a075');rect(723,477,150,4,'#dac18c');
// Farm fence.
for(let x=4;x<=11;x++){rect(x*T,298,5,30,'#eee0b1');rect(x*T,493,5,30,'#eee0b1');}rect(160,305,285,5,'#dbc695');rect(160,505,285,5,'#dbc695');
for(let i=0;i<24;i++){const p=s.plots[i],x=(5+i%6)*T,y=(8+Math.floor(i/6))*T;rect(x+1,y+1,38,38,p.tilled?(p.water?'#705a42':'#9a734b'):'#a39a62');if(p.tilled)for(let l=0;l<3;l++)rect(x+5,y+8+l*10,29,2,p.water?'#5e503f':'#806043');if(p.crop>=0){const crop=Meadow.CROPS[p.crop],f=p.growth/crop.days,sway=Math.round(Math.sin(t*2+i)*1.5);rect(x+18,y+19-f*13,4,15+f*7,'#456e40');rect(x+11+sway,y+15-f*7,10,5,'#61984a');rect(x+21+sway,y+12-f*6,9,5,'#73a751');if(f>=1){rect(x+12,y+17,17,13,crop.color);rect(x+15,y+17,4,3,'#f1c375');rect(x+24,y+20,5,8,'#ba7544');if(Math.sin(t*3+i)>.6)rect(x+32,y+7,3,3,'#fff1a3');}else{rect(x+15,y+24,10,5,crop.color);}if(p.water)rect(x+30,y+30,4,5,'#88ccda');}}
const tree=(x,y,dim=false)=>{rect(x+12,y+32,13,24,'#795d40');rect(x-3,y+13,46,27,dim?'#789861':'#497747');rect(x+2,y-4,35,27,dim?'#89a56c':'#5f8d4b');rect(x+11,y-13,22,21,'#779d58');rect(x+6,y+4,7,4,'#8eaf63');};
for(const [x,y] of [[0,0],[1,1],[9,0],[21,0],[22,3],[0,5],[0,11],[10,15],[16,16],[22,15],[18,0]])tree(x*T,y*T);
Meadow.NODES.forEach((n,i)=>{const x=n.x*T,y=n.y*T,used=s.nodes[i]===s.day;if(n.type==='wood'){if(used){rect(x+9,y+20,24,17,'#8c6945');rect(x+9,y+18,24,7,'#c29e69');}else tree(x,y-15);}else{rect(x+4,y+14,32,22,used?'#969e8b':'#798c87');rect(x+10,y+8,22,12,used?'#afb69c':'#a8b5a1');rect(x+9,y+16,8,5,'#c1c8b5');}});
const house=(x,y,w,h,roof,label)=>{rect(x+7,y+17,w,h,'#4b62494a');rect(x,y+20,w,h-20,'#eed9a2');rect(x,y+27,w,6,'#d4bd85');rect(x+12,y+49,23,24,'#537d79');rect(x+15,y+51,7,17,'#9ac5b3');rect(x+w-34,y+49,23,24,'#537d79');rect(x+w/2-13,y+h-39,27,39,'#805e46');rect(x+w/2+6,y+h-19,4,4,'#f2c76f');c.fillStyle=roof;c.beginPath();c.moveTo(x-9,y+29);c.lineTo(x+w/2,y-19);c.lineTo(x+w+9,y+29);c.closePath();c.fill();rect(x-9,y+28,w+18,6,'#714f3d');for(let i=0;i<4;i++)rect(x+i*5,y+5+i*6,w-i*10,2,'#ffffff18');text(label,x+w/2,y+h+18,12);};
house(3*T,2*T,4*T,3*T,'#b47455','COTTAGE');house(11*T,2*T,4*T,3*T,'#637f77','MARKET');house(12*T,7*T,4*T,2*T,s.hall?'#b79957':'#838474',s.hall?'FESTIVAL HALL':'OLD TOWN HALL');house(4*T,14*T,3*T,2*T,'#987657',s.coop?'HEN HOUSE':'COOP SITE');
if(s.coop)for(let i=0;i<3;i++){const x=275+i*22+Math.sin(t+i)*5,y=586+(i%2)*23;rect(x,y,15,10,'#fff0ce');rect(x+10,y-4,8,8,'#fff9e7');rect(x+16,y-1,5,3,'#d8a14d');rect(x+12,y-7,4,4,'#be6452');}
const person=(x,y,color,hat,walk=0)=>{const yy=y+Math.abs(Math.sin(walk))*2;rect(x-9,y+10,22,5,'#2c49314f');rect(x-6,yy+4,5,10,'#434f55');rect(x+3,yy+4,5,10,'#434f55');rect(x-8,yy-9,18,17,color);rect(x-7,yy-22,16,15,'#efc793');rect(x-9,yy-24,19,6,hat);rect(x-13,yy-19,27,4,hat);rect(x+4,yy-15,3,3,'#3f4940');rect(x-12,yy-6,5,11,'#efc793');};
Meadow.NPCS.forEach((n,i)=>{person(n.x*T+20,n.y*T+20+Math.sin(t+i),n.color,'#6b5143');text(n.name,n.x*T+20,n.y*T-13,11);});
if(route&&route.length){const end=route[route.length-1];c.strokeStyle='#ffe7a4';c.lineWidth=2;c.strokeRect(end[0]*40+5,end[1]*40+5,30,30);}
person(player.x*T+20,player.y*T+21,'#507d92','#e6be73',route.length?t*13:0);
if(game.rain()){rect(0,0,960,720,'#375b7225');for(let i=0;i<90;i++)rect((i*157+t*45)%960,(i*79+t*210)%720,2,10,'#d4e6dd88');}
if(s.hall){for(let i=0;i<14;i++){rect(464+i*14,264+Math.sin(i*.6)*7,7,12,['#bf6a59','#ead077','#729cb0'][i%3]);}}
text('FISHING DOCK',834,463,11);text('YOUR GARDEN',318,294,11);
}
}
