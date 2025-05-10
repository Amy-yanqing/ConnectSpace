const CSvg = (props) => (
	 <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4facfe" />
        <stop offset="100%" stopColor="#00f2fe" />
      </linearGradient>
    </defs>
    <path
      d="M17 6.5C16.2 5.1 14.6 4 12.2 4 8.8 4 6 6.8 6 10.2S8.8 16.4 12.2 16.4c2.4 0 4-1 4.8-2.5l1.8 1.1c-1.2 2.4-3.7 4-6.6 4-4.5 0-8-3.5-8-8s3.5-8 8-8c2.9 0 5.4 1.6 6.6 4l-1.8 1.1z"
      fill="url(#blueGradient)"
    />
  </svg>
);
export default CSvg;