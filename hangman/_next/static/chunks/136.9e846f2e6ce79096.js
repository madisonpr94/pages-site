(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[136],{5042:function(){},76:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return x}});var t=n(7437),i=n(2265),r=n(880);let l=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m"]];function d(e){return l.map((s,n)=>(0,t.jsx)("div",{className:"flex flex-row items-center",children:s.map((s,n)=>{let i="rounded-md border-2 border-white px-4 py-2 m-1 font-mono",r=-1!=e.lettersGuessed.findIndex(e=>s==e),l=e.word.indexOf(s)>-1;return r&&(l?i+=" bg-green-600":i+=" bg-stone-700"),(0,t.jsx)("div",{"data-key":s,onClick:e.callback,className:i,children:s},n)})},n))}function c(e){let s=(0,t.jsx)("div",{children:"____\xa0"}),n=(0,t.jsx)("div",{children:"|\xa0\xa0|\xa0"}),i=(0,t.jsx)("div",{children:"|\xa0\xa0\xa0\xa0"}),r=(0,t.jsx)("div",{children:"|\xa0\xa0\xa0\xa0"}),l=(0,t.jsx)("div",{children:"|\xa0\xa0\xa0\xa0"});return e.state>0&&(i=(0,t.jsx)("div",{children:"|\xa0\xa0o\xa0"})),e.state>1&&(r=(0,t.jsx)("div",{children:"|\xa0\xa0|\xa0"})),e.state>2&&(l=(0,t.jsx)("div",{children:"|\xa0/\xa0\xa0"})),e.state>3&&(l=(0,t.jsx)("div",{children:"|\xa0/\xa0\\"})),e.state>4&&(i=(0,t.jsx)("div",{children:"|\xa0\\o\xa0"})),e.state>5&&(i=(0,t.jsx)("div",{children:"|\xa0\\o/"})),(0,t.jsxs)("div",{className:"flex flex-col items-center font-mono text-center *:w-full",children:[s,n,i,r,l]})}function a(e){if(e.word)return e.word.split("").map((s,n)=>(-1==e.lettersGuessed.indexOf(s)&&(s="_"),(0,t.jsx)("div",{className:"px-2 font-mono",children:s},n)))}function x(){let[e,s]=(0,i.useState)((0,r.R_)({exactly:1,wordsPerString:1})[0].toLowerCase()),[n,l]=(0,i.useState)([""]),x=7-n.filter(s=>-1==e.indexOf(s)).length;return x<=0?(0,t.jsx)("div",{className:"flex flex-col items-center justify-around h-screen",children:(0,t.jsxs)("div",{className:"h-3/5 text-center",children:[(0,t.jsx)("div",{className:"text-2xl text-rose-600 my-8",children:"Game over!"}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{href:"",children:"Play again?"})})]})}):e.split("").every(e=>n.indexOf(e)>-1)?(0,t.jsx)("div",{className:"flex flex-col items-center justify-around h-screen",children:(0,t.jsxs)("div",{className:"h-3/5 text-center",children:[(0,t.jsx)("div",{className:"text-2xl text-green-600 my-8",children:"Victory!"}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{href:"",children:"Play again?"})})]})}):(0,t.jsxs)("div",{className:"flex flex-col items-center justify-around gap-6 h-screen p-16",children:[(0,t.jsx)("div",{className:"text-xl text-stone-200 basis-1 font-mono tracking-wider underline inline-block animate-bounce",children:"Hangman"}),(0,t.jsxs)("div",{id:"hangman",className:"basis-2 font-mono grow flex flex-col justify-between",children:[(0,t.jsxs)("div",{children:["Incorrect guesses remaining: ",x]}),(0,t.jsx)(c,{state:7-x}),(0,t.jsx)("div",{})]}),(0,t.jsx)("div",{id:"word",className:"flex flex-row basis-1",children:(0,t.jsx)(a,{word:e,lettersGuessed:n})}),(0,t.jsx)("div",{id:"keyboard",className:"flex flex-col items-center basis-1",children:(0,t.jsx)(d,{word:e,lettersGuessed:n,callback:function(e){console.log(e.currentTarget);let s=e.currentTarget.getAttribute("data-key");-1==n.findIndex(e=>e==s)&&l(n.concat(s))}})})]})}}}]);