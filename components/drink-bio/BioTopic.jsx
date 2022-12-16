function BioTopic({description, exdescript}) {
    return (
        <aside>
            <header>
                <div className="bg-slate-200 w-1/3 mx-auto rounded-[30px]">
                    <h2 className="text-xl text-slate-700 text-center">Description</h2>
                    <p className="text-center text-slate-500 mb-4">{description}</p>
                </div>
                <p className="mx-auto p-4 w-1/2 text-slate-700 bg-slate-300 rounded-[30px]">{exdescript}</p>
            </header>
        </aside>
    );
}

export default BioTopic;