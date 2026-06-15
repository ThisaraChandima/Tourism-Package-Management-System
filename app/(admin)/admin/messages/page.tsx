export default function AdminMessagesPage() {
  return (
    <main className="flex-1 md:ml-sidebar-width flex h-screen pt-[72px] overflow-hidden">
      {/* Conversation List (Secondary Sidebar) */}
      <aside className="w-80 bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full shrink-0">
        <div className="p-lg border-b border-outline-variant">
          <h2 className="font-title-lg text-title-lg text-on-surface mb-4">Active Conversations</h2>
          <div className="flex gap-2">
            <button className="flex-1 py-1.5 px-3 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-medium">All (12)</button>
            <button className="flex-1 py-1.5 px-3 rounded-full bg-transparent border border-outline-variant text-on-surface-variant font-label-md text-label-md">Unread (3)</button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto chat-scroll">
          {/* Escalated Chat */}
          <div className="p-4 border-b border-outline-variant bg-error-container/20 cursor-pointer hover:bg-surface-container-low transition-colors relative">
            <div className="absolute top-4 right-4 flex items-center gap-1 text-error">
              <span className="material-symbols-outlined text-[16px] flex" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              <span className="font-label-md text-[10px] font-bold uppercase">Escalation</span>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface shrink-0">
                ER
              </div>
              <div className="flex-1 min-w-0 pr-16">
                <h3 className="font-title-md text-title-md text-on-surface truncate">Elena Rodriguez</h3>
                <p className="font-body-md text-body-md text-on-surface-variant truncate text-sm">Booking #TRV-8902</p>
                <p className="font-body-md text-body-md text-on-surface truncate text-sm mt-1 font-medium">AI: "I'm sorry, I cannot process a multi-city custom route..."</p>
              </div>
            </div>
            <span className="absolute bottom-4 right-4 text-xs text-outline-variant">2m ago</span>
          </div>
          {/* Normal Chat */}
          <div className="p-4 border-b border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors relative">
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden shrink-0">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8tqhoam07lhwnYJsJ_JAVnZ2D1DIzvzKy_rvDBRlIRsoUM6mIQN_DHocL8jMajkNDo-W578NqfK-RUqPMMKwWCSix0nSCpmscIQzH0E_xAholSL7yWdMAO75FQhgmjAryPkBSlg1NF1nh6aCVcCRjbapC29dA1Ol6qMGotV86vwMXTejq1D89ajjgzs10xhVIBkyD_3Gl-PHcEmfluS7O8eUmtrCF03ppY6Ypoz6wgxn_WjF5KNS8bM0a5r1cVOXMFX4lJ6W-gOM')" }}></div>
              </div>
              <div className="flex-1 min-w-0 pr-8">
                <h3 className="font-title-md text-title-md text-on-surface truncate">Marcus Chen</h3>
                <p className="font-body-md text-body-md text-on-surface-variant truncate text-sm">General Inquiry</p>
                <p className="font-body-md text-body-md text-outline truncate text-sm mt-1">Thanks, that clarifies the baggage policy.</p>
              </div>
            </div>
            <span className="absolute top-4 right-4 text-xs text-outline-variant">14m ago</span>
          </div>
          {/* Normal Chat */}
          <div className="p-4 border-b border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors relative">
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold shrink-0">
                SJ
              </div>
              <div className="flex-1 min-w-0 pr-8">
                <h3 className="font-title-md text-title-md text-on-surface truncate">Sarah Jenkins</h3>
                <p className="font-body-md text-body-md text-on-surface-variant truncate text-sm">Payment Issue</p>
                <p className="font-body-md text-body-md text-outline truncate text-sm mt-1">Has the refund been processed yet?</p>
              </div>
            </div>
            <span className="absolute top-4 right-4 text-xs text-outline-variant">1h ago</span>
          </div>
        </div>
      </aside>

      {/* Chat Interface */}
      <section className="flex-1 flex flex-col bg-surface-container-lowest h-full relative">
        {/* Chat Header */}
        <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest z-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-title-lg text-on-surface">
              ER
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Elena Rodriguez</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                <span className="font-label-md text-label-md text-outline">Online (Web)</span>
                <span className="text-outline mx-1">•</span>
                <span className="font-label-md text-label-md text-primary font-medium hover:underline cursor-pointer">Booking #TRV-8902</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors flex" title="View Profile">
              <span className="material-symbols-outlined flex">person</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors flex" title="Resolve">
              <span className="material-symbols-outlined flex">check_circle</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors flex" title="More options">
              <span className="material-symbols-outlined flex">more_vert</span>
            </button>
          </div>
        </div>

        {/* Chat History Area */}
        <div className="flex-1 overflow-y-auto p-lg chat-scroll bg-surface flex flex-col gap-6">
          <div className="text-center my-4">
            <span className="bg-surface-container-highest text-on-surface-variant font-label-md text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">Today, 10:24 AM</span>
          </div>

          {/* Tourist Message */}
          <div className="flex gap-4 max-w-[80%] self-end flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface text-sm shrink-0">
              ER
            </div>
            <div className="bg-primary-container text-on-primary-container p-4 rounded-2xl rounded-tr-sm shadow-sm">
              <p className="font-body-md text-body-md">Hi, I'm looking to book a trip to Italy, but I want a very specific route: Rome to Florence, then a stop in a small village called Civita di Bagnoregio before heading to Venice. Can you set that up?</p>
              <div className="text-right mt-2 text-[10px] opacity-70">10:24 AM</div>
            </div>
          </div>

          {/* AI Message */}
          <div className="flex gap-4 max-w-[80%] self-start">
            <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[18px] flex">smart_toy</span>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant text-on-surface p-4 rounded-2xl rounded-tl-sm shadow-sm">
              <p className="font-body-md text-body-md">Hello Elena! I can certainly help you look into Italian itineraries. We have several great pre-packaged routes that cover Rome, Florence, and Venice.</p>
              <p className="font-body-md text-body-md mt-2">However, creating a custom multi-city route with a specific village stop requires our specialized booking agents to check local transit and boutique hotel availability.</p>
              <div className="text-left mt-2 text-[10px] text-outline-variant">10:24 AM • Automated Response</div>
            </div>
          </div>

          {/* Tourist Message */}
          <div className="flex gap-4 max-w-[80%] self-end flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface text-sm shrink-0">
              ER
            </div>
            <div className="bg-primary-container text-on-primary-container p-4 rounded-2xl rounded-tr-sm shadow-sm">
              <p className="font-body-md text-body-md">I don't want a pre-packaged route. I need this specific itinerary. Can I speak to a real person?</p>
              <div className="text-right mt-2 text-[10px] opacity-70">10:26 AM</div>
            </div>
          </div>

          {/* Alert Banner */}
          <div className="my-6 mx-auto w-full max-w-2xl bg-error-container text-on-error-container p-4 rounded-xl shadow-sm flex items-center gap-4 border border-error/20">
            <div className="bg-error text-on-error p-2 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined flex">warning</span>
            </div>
            <div className="flex-1">
              <h4 className="font-title-md text-title-md font-bold">AI could not resolve: Custom Route Request</h4>
              <p className="font-body-md text-body-md mt-1">Live Agent Required. Conversation handed off from AI Assistant.</p>
            </div>
            <button className="bg-surface-container-lowest text-error font-label-md px-4 py-2 rounded-lg font-bold border border-error/20 hover:bg-surface transition-colors">
              Acknowledge
            </button>
          </div>

          {/* Internal Note (Admin side only) */}
          <div className="flex justify-center my-2">
            <div className="bg-surface-variant text-on-surface-variant p-3 rounded-lg max-w-lg text-center border border-outline-variant/50 border-dashed">
              <p className="font-label-md text-label-md flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[16px] flex">visibility_off</span>
                Internal Note: User has high lifetime value (Tier 1). Expedite custom routing.
              </p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-lg bg-surface-container-lowest border-t border-outline-variant shadow-[0_-4px_6px_rgba(0,0,0,0.02)] z-10">
          <div className="flex items-end gap-3 bg-surface rounded-xl border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary p-2 transition-all">
            <button className="p-2 text-outline hover:text-primary transition-colors rounded-full hover:bg-surface-container-high shrink-0 mb-1 flex" title="Attach file">
              <span className="material-symbols-outlined flex">attach_file</span>
            </button>
            <textarea 
              className="w-full bg-transparent border-none focus:ring-0 resize-none font-body-md text-body-md py-3 px-2 text-on-surface placeholder:text-outline-variant" 
              placeholder="Type your reply as Admin..." 
              rows={2}
            ></textarea>
            <div className="flex gap-2 shrink-0 mb-1">
              <button className="p-2 text-outline hover:text-primary transition-colors rounded-full hover:bg-surface-container-high flex" title="Insert template">
                <span className="material-symbols-outlined flex">article</span>
              </button>
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold flex items-center gap-2 hover:bg-primary-fixed-variant transition-colors shadow-sm">
                <span>Send</span>
                <span className="material-symbols-outlined text-[18px] flex">send</span>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3 px-2">
            <p className="font-label-md text-label-md text-outline">Press Enter to send, Shift+Enter for new line.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
              <span className="font-label-md text-label-md text-outline">You are assigned to this chat</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
