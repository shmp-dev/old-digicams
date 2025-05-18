console.log("Hello, World!");

// test-button クラスのボタンがクリックされたときの処理
let testButton = document.querySelector('.test-button');
if (testButton) {
		testButton.addEventListener('click', () => {
				// ボタンのテキストを取得
				const buttonText = testButton.innerText;
				// アラートを表示
				alert(`Button clicked: ${buttonText}`);
		});
}
