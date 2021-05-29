import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as ic0_MarsPool_idl, canisterId as ic0_MarsPool_id } from 'dfx-generated/ic0_MarsPool';

const agent = new HttpAgent();
const ic0_MarsPool = Actor.createActor(ic0_MarsPool_idl, { agent, canisterId: ic0_MarsPool_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await ic0_MarsPool.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
