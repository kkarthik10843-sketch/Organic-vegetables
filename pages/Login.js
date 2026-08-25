function Login() {
    const [submitted, setSubmitted] = React.useState(false);
    return <div className="page-shell max-w-xl" data-name="login-page">
        <div className="card p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl bg-green-100 text-[var(--primary)] flex items-center justify-center text-2xl mb-6"><div className="icon-leaf"></div></div>
            <p className="section-kicker">Welcome back</p><h1 className="text-3xl mb-2">Log in to AgriDirect</h1><p className="text-slate-500 mb-8">Your direct connection to fresh, fairly priced produce.</p>
            {submitted && <div className="bg-green-50 text-green-700 rounded-lg p-3 mb-5 text-sm">Welcome back. Demo login successful.</div>}
            <form className="space-y-5" onSubmit={event => { event.preventDefault(); setSubmitted(true); }}>
                <label className="block text-sm font-semibold">Email<input required type="email" placeholder="you@example.com" className="input-control mt-2" /></label>
                <label className="block text-sm font-semibold">Password<input required type="password" placeholder="Enter your password" className="input-control mt-2" /></label>
                <div className="flex justify-between items-center text-sm"><label className="flex gap-2 items-center text-slate-600"><input type="checkbox" /> Remember me</label><button type="button" className="text-[var(--primary)] font-semibold">Forgot password?</button></div>
                <button className="btn-primary w-full">Log In <div className="icon-arrow-right"></div></button>
            </form>
            <p className="text-center text-sm text-slate-500 mt-7">Don't have an account? <a href="#register" className="text-[var(--primary)] font-bold">Join Now</a></p>
        </div>
    </div>;
}