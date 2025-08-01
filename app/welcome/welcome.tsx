import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";


export function Welcome() {
  return (


      
    <div className="w-full h-[100vh] flex justify-center items-center">
      {/*---------------------------------------------------Desktop--------------------------------------------------------------------- */}
      <form className="hidden md:flex min-w-[31.25vw]  min-h-[83.33vh] border-1 border-black flex-col justify-center items-center gap-[1.39vh] rounded-[15px] text-[1.04vw]">

        <div className="w-full h-[5.56vh] flex flex-row gap-[15px] items-center justify-center mb-[1.82vw]">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45c7dd7e-6cef-4101-93b9-df6da53c9ac7/d9igbrc-f7759a7a-0a2d-4e59-9a5d-1bef7edc9519.png/v1/fill/w_1024,h_1024/emoticon_pac_man_de_facebook_de_cachete_grande_by_thebether_d9igbrc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzQ1YzdkZDdlLTZjZWYtNDEwMS05M2I5LWRmNmRhNTNjOWFjN1wvZDlpZ2JyYy1mNzc1OWE3YS0wYTJkLTRlNTktOWE1ZC0xYmVmN2VkYzk1MTkucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MGlYhyqm6Cm7g6dJ0GtSl8X9iBAoA7YKRv3zIYOpDlA" alt="ackman" className="w-[3.13vw] min-h-[5.56vh]"/>
          <h1 className="font-bold text-[1.46vw]">TELL ME ABOUT YOUR LIFE</h1>
        </div>

        <input type="text" placeholder="What is Your Name" className="w-[28.65vw] h-[4vh] border-1 border-black rounded-[5px] pl-[0.16vw]"/>
        <input type="password" placeholder="Tell me a secret"  className="w-[28.65vw] h-[4vh] border-1 border-black rounded-[5px] pl-[0.16vw]"/>
        <input type="number" placeholder="tell me your age"  className="w-[28.65vw] h-[4vh] border-1 border-black rounded-[5px] pl-[0.16vw]"/>

        <label htmlFor="textarea" className="text-[1.3vw]">Tell me about your self</label>
        <textarea rows={5} className="resize-none w-[28.65vw] h-[7.41vh] border-1 border-black rounded-[5px] pl-[0.16vw]"/>

        <label htmlFor="choice" className="text-[1.3vw]">What was your Childhood hobby?</label>
        <select name="hobby" className="w-[28.65vw] h-h-[4vh] border-1 border-black rounded-[5px] pl-[0.16vw]">
          <option>Collecting Stamp</option>
          <option>Coding</option>
          <option>Watching TV</option>
          <option>Eating an elephant</option>
          <option>Reading Lourem Lapse</option>
        </select>

        <input type="submit" value="Let me Hear" className="min-w-[13.02vw] h-[5vh] bg-[#4b83ad] mt-[2.78vh] text-[#FFFFFF] rounded-[50px] hover:bg-[#2e4c63] transition ease-in-out duration-500 cursor-pointer"/>

      </form>

      {/*---------------------------------------------Mobile------------------------------------------------------------------------- */}
      <form className="flex md:hidden w-[97.09vw] h-[80vh] border-1 border-black justify-center items-center flex-col gap-[3.27vh] rounded-[15px] text-[3.64vw]">


        <div className="w-full h-[9.81vh] flex flex-col justify-center items-center gap-[1.64vh]">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45c7dd7e-6cef-4101-93b9-df6da53c9ac7/d9igbrc-f7759a7a-0a2d-4e59-9a5d-1bef7edc9519.png/v1/fill/w_1024,h_1024/emoticon_pac_man_de_facebook_de_cachete_grande_by_thebether_d9igbrc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzQ1YzdkZDdlLTZjZWYtNDEwMS05M2I5LWRmNmRhNTNjOWFjN1wvZDlpZ2JyYy1mNzc1OWE3YS0wYTJkLTRlNTktOWE1ZC0xYmVmN2VkYzk1MTkucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MGlYhyqm6Cm7g6dJ0GtSl8X9iBAoA7YKRv3zIYOpDlA" alt="ackman" className="w-[14.56vw] h-[6.54vh]"/>
          <h1 className="font-bold text-[6.07vw]">TELL ME ABOUT YOUR LIFE</h1>

        </div>

        <input type="text" placeholder="What is your Name?" className="min-w-[72.82vw] h-[3.27vh] rounded-[5px] border-1 border-black pl-[1.21vw]"/>
        <input type="password" placeholder="Tell me a secret" className="w-[72.82vw] h-[3.27vh] rounded-[5px] border-1 border-black pl-[1.21vw]"/>
        <input type="number" placeholder="tell me your age" className="w-[72.82vw] h-[3.27vh] rounded-[5px] border-1 border-black pl-[1.21vw]"/>

        <label htmlFor="textarea" className="text-[4.85vw]">Tell me about your self</label>
        <textarea rows={5} className="resize-none w-[72.82vw] h-[8vh] rounded-[5px] border-1 border-black pl-[1.21vw]"/>

        <label htmlFor="choice" className="text-[4.85vw]">What was your Childhood hobby?</label>
        <select name="hobby" className="w-[72.82vw] h-[3.27vh] border-1 border-black rounded-[5px] pl-[3px] pl-[1.21vw]">
          <option>Collecting Stamp</option>
          <option>Coding</option>
          <option>Watching TV</option>
          <option>Eating an elephant</option>
          <option>Reading Lourem Lapse</option>
        </select>

       <input type="submit" value="Let me Hear" className="w-[48.54vw] h-[3.27vh] bg-[#4b83ad] text-[#FFFFFF] rounded-[50px] hover:bg-[#2e4c63] transition ease-in-out duration-500 cursor-pointer"/>

      </form>
    </div>

  );
}

