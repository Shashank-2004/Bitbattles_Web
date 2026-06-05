async function testBackendIntegration() {
  const apiUrl = 'http://localhost:5000/api/blog';
  console.log("Testing POST /api/blog...");
  
  const newBlog = {
    title: "Test Blog Integration",
    slug: "test-blog-integration",
    content: "This is a test blog to verify the backend integration works.",
    tags: ["Test", "Backend"],
    author: "System Tester",
    published: true
  };

  try {
    // 1. Create Blog
    const createRes = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog)
    });
    
    if (!createRes.ok) throw new Error(`Create failed: ${createRes.statusText}`);
    const createdData = await createRes.json();
    console.log("✅ Successfully created blog with ID:", createdData._id);

    // 2. Delete Blog
    console.log(`Testing DELETE /api/blog/${createdData._id}...`);
    const deleteRes = await fetch(`${apiUrl}/${createdData._id}`, {
      method: 'DELETE'
    });
    
    if (!deleteRes.ok) throw new Error(`Delete failed: ${deleteRes.statusText}`);
    const deleteData = await deleteRes.json();
    console.log("✅ Successfully deleted blog:", deleteData.message);

  } catch (error) {
    console.error("❌ Test failed:", error.message);
  }
}

testBackendIntegration();
