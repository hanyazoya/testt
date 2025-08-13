$(document).ready(function() {
  // Chatbot mock answers
  $('#chat-send').click(function() {
    let question = $('#chat-input').val();
    if (!question) return;
    $('#chat-box').append('<div><strong>You:</strong> ' + question + '</div>');
    $('#chat-input').val('');
    // simple static responses (replace with API call if needed)
    let answer = 'Thanks for asking! I am Zoya, a developer passionate about coding.';
    if (question.toLowerCase().includes('project')) answer = 'I have done several projects in web and data.';
    if (question.toLowerCase().includes('skill')) answer = 'My skills include HTML, CSS, JS, PHP, and more.';
    $('#chat-box').append('<div><strong>ZoyaBot:</strong> ' + answer + '</div>');
    $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);
  });

  // Filter projects
  $('.filter-btn').click(function() {
    let filter = $(this).data('filter');
    if (filter === 'all') {
      $('.project-card').show();
    } else {
      $('.project-card').hide();
      $('.project-card[data-category="' + filter + '"]').show();
    }
  });
});
