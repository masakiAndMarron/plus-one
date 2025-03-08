const Contact = () => {
  return (
    <div className="pt-16 font-japanese-basic">
      <div className="relative h-60 bg-site-sub-color">
        <h1
          className="content-title absolute top-0 font-semibold"
          data-en="Contact"
        >
          お問い合わせ
        </h1>
      </div>
      <div className="p-8 mb-12">
        <div className="flex flex-col gap-2">
          <label className="ml-2 text-sm">お名前</label>
          <input
            className="pl-3 border rounded-md p-2 text-sm"
            type="text"
            placeholder="お名前を入力してください"
          />
        </div>
        <div className="mt-6 mb-4 border-b-[1.2px] opacity-45"></div>
        <div className="flex flex-col gap-2">
          <label className="ml-2 text-sm">メールアドレス</label>
          <input
            className="pl-3 border rounded-md p-2 text-sm"
            type="email"
            placeholder="メールアドレスを入力してください"
          />
        </div>
        <div className="mt-6 mb-4 border-b-[1.2px] opacity-45"></div>
        <div className="flex flex-col gap-2">
          <label className="ml-2 text-sm">電話番号</label>
          <input
            className="pl-3 border rounded-md p-2 text-sm"
            type="tel"
            placeholder="電話番号を入力してください"
          />
        </div>
        <div className="mt-6 mb-4 border-b-[1.2px] opacity-45"></div>
        <div className="flex flex-col gap-2">
          <label className="ml-2 text-sm">お問い合わせ内容</label>
          <textarea
            className="pl-3 border rounded-md p-2 text-sm"
            rows={8}
            placeholder="お問い合わせ内容を入力してください"
          ></textarea>
        </div>
        <div className="mt-6 mb-4 border-b-[1.2px] opacity-45"></div>
        <div className="text-center mt-12">
          <button className="group rounded relative h-12 overflow-hidden bg-button-main-color opacity-80 px-6 text-neutral-50 transition">
            <span className="relative tracking-[3px]">送信する</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
