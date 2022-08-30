let quotes = [
  '"1.Friendship is a word, the very sight of which in print makes heart warm." <br> <span>-- Augustine Birrell</span>',
  '"2.Friendship is always a sweet responsibility, never an opportunity." <br> <span>--Khalil Gibran</span>',
  '"3.Love is blind; friendship closes its eyes."<br> <span> -- Friedrich Nietzsche</span>',
  '"4.Wishing to be friends is quick work, but friendship is a slow ripening fruit." <br> <span>-- Aristotle</span>',
  '"5.Friendship is the only cement that will ever hold the world together."<br> <span>-- Woodrow Wilson</span>',
  '"6.Friendship is like money, easier made than kept."<br> <span>-- Samuel Butler</span>',
  '"7.Friendship is the hardest thing in the world to explain. It’s not something you learn in school. But if you haven’t learned the meaning of friendship, you really haven’t learned anything."<br> <span>-- Muhammad Ali</span>',
  '"8.There are big ships and small ships. But the best ship of all is friendship."<br> <span>-- Unknown</span>',
  '"9.Friendship is like a glass ornament, once it is broken it can rarely be put back together exactly the same way."<br> <span>-- Charles Kingsley</span>',
  '"10.Friendship is the source of the greatest pleasures, and without friends even the most agreeable pursuits become tedious."<br> <span>-- Thomas Aquinas</span>',
  '"11.Shared joy is a double joy; shared sorrow is half a sorrow."<br> <span>-- Swedish Proverb</span>',
  '"12.The greatest gift of life is friendship, and I have received it."<br> <span>-- Hubert H. Humphrey</span>',
  '"13.Every friendship travels at sometime through the black valley of despair. This tests every aspect of your affection. You lose the attraction and the magic."<br> <span>-- John O’Donohue</span>',
  '"14.Be slow to fall into friendship; but when thou art in, continue firm & constant."<br> <span>-- Socrates</span>',
  '"15.Friendship improves happiness, and abates misery, by doubling our joys, and dividing our grief."<br> <span>-- Marcus Tullius Cicero</span>'
];

function myquote(){
    let randomQuote = Math.floor(Math.random()* (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomQuote];
}