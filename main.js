let currentCursor = null;

while (true) {
  let res = await fetch("https://flag-gilt.vercel.app/api/challenge", {
    method: "POST",
    headers: { Authorization: "Bearer uM0M7uypyeeHZ741XIrs9KsFOUEhxUdtXJA=" },
    body: currentCursor ? JSON.stringify({ cursor: currentCursor }) : undefined,
  });

  let body = await res.json();
  console.log(body);

  currentCursor = body.nextCursor;
  if (!currentCursor) break;
}
