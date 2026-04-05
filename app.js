/* ============================================
   BADMINTON TOURNAMENT SCOREBOARD - APP.JS
   Complete scoring system with all categories
   ============================================ */

// ============================================
// TOURNAMENT DATA MODEL
// ============================================

const TOURNAMENT_DATA = {
    seniors: {
        id: 'seniors',
        title: "Men's Doubles (Seniors)",
        shortTitle: "Men's Doubles",
        format: 'roundRobin',
        scoring: 20,
        gamePoint: 21,
        maxCap: 30,
        timing: '09:00 AM - 10:15 AM',
        courts: 2,
        teams: {
            A: { name: 'Team A', players: 'Anadaraj & Siva' },
            B: { name: 'Team B', players: 'Sathish & Raja' },
            C: { name: 'Team C', players: 'Saravanan & Dinesh' },
            D: { name: 'Team D', players: 'Vel & Nagaraj' },
            E: { name: 'Team E', players: 'Subhash & Ashok' },
            F: { name: 'Team F', players: 'Santhosh & JK' },
        },
        fixtures: [
            { round: 1, matches: [
                { id: 'S-R1M1', teamA: 'A', teamB: 'F', referee: 'Saravanan', court: 1 },
                { id: 'S-R1M2', teamA: 'B', teamB: 'E', referee: 'Vel', court: 2 },
                { id: 'S-R1M3', teamA: 'C', teamB: 'D', referee: 'Subhash', court: 1 },
            ]},
            { round: 2, matches: [
                { id: 'S-R2M1', teamA: 'A', teamB: 'E', referee: 'Sathish', court: 1 },
                { id: 'S-R2M2', teamA: 'F', teamB: 'D', referee: 'Ashok', court: 2 },
                { id: 'S-R2M3', teamA: 'B', teamB: 'C', referee: 'JK', court: 1 },
            ]},
            { round: 3, matches: [
                { id: 'S-R3M1', teamA: 'A', teamB: 'D', referee: 'Saravanan', court: 1 },
                { id: 'S-R3M2', teamA: 'E', teamB: 'C', referee: 'Siva', court: 2 },
                { id: 'S-R3M3', teamA: 'F', teamB: 'B', referee: 'Vel', court: 1 },
            ]},
            { round: 4, matches: [
                { id: 'S-R4M1', teamA: 'A', teamB: 'C', referee: 'Santhosh', court: 1 },
                { id: 'S-R4M2', teamA: 'D', teamB: 'B', referee: 'Subhash', court: 2 },
                { id: 'S-R4M3', teamA: 'E', teamB: 'F', referee: 'Sathish', court: 1 },
            ]},
            { round: 5, matches: [
                { id: 'S-R5M1', teamA: 'A', teamB: 'B', referee: 'Santhosh', court: 1 },
                { id: 'S-R5M2', teamA: 'C', teamB: 'F', referee: 'Ashok', court: 2 },
                { id: 'S-R5M3', teamA: 'D', teamB: 'E', referee: 'Siva', court: 1 },
            ]},
        ],
    },

    kidsMens: {
        id: 'kidsMens',
        title: "Kid's & Men's Doubles",
        shortTitle: "Kid's & Men's",
        format: 'knockout',
        scoring: 15,
        gamePoint: 21,
        maxCap: 30,
        timing: '',
        courts: 1,
        teams: {
            A: { name: 'Team A', players: 'Balu & (Lucky Draw)' },
            B: { name: 'Team B', players: 'Yanavel & (Lucky Draw)' },
            C: { name: 'Team C', players: 'Sharwesh S & (Lucky Draw)' },
            D: { name: 'Team D', players: 'Easan & (Lucky Draw)' },
            E: { name: 'Team E', players: 'Dharun & (Lucky Draw)' },
            F: { name: 'Team F', players: 'Sharwesh & (Lucky Draw)' },
        },
        fixtures: [
            { round: 1, label: 'Round 1', matches: [
                { id: 'KM-R1M1', teamA: 'A', teamB: 'B', referee: 'Saravanan', court: 1 },
                { id: 'KM-R1M2', teamA: 'C', teamB: 'D', referee: 'Velu', court: 1 },
                { id: 'KM-R1M3', teamA: 'E', teamB: 'F', referee: 'Sathish', court: 1 },
            ]},
            { round: 2, label: 'Round 2 (Winners)', matches: [
                { id: 'KM-R2M1', teamA: 'W1', teamB: 'W2', referee: 'JK', court: 1, dynamic: true },
                { id: 'KM-R2M2', teamA: 'W2', teamB: 'W3', referee: 'Subhash', court: 1, dynamic: true },
                { id: 'KM-R2M3', teamA: 'W3', teamB: 'W1', referee: 'Ashok', court: 1, dynamic: true },
            ]},
            { round: 3, label: 'Round 3 (Runners)', matches: [
                { id: 'KM-R3M1', teamA: 'R1', teamB: 'R2', referee: 'Santhosh', court: 1, dynamic: true },
                { id: 'KM-R3M2', teamA: 'R2', teamB: 'R3', referee: 'Siva', court: 1, dynamic: true },
                { id: 'KM-R3M3', teamA: 'R3', teamB: 'R1', referee: 'Dinesh', court: 1, dynamic: true },
            ]},
        ],
    },

    mixed: {
        id: 'mixed',
        title: "Men's & Women's Mixed Doubles",
        shortTitle: "Mixed Doubles",
        format: 'knockout',
        scoring: 15,
        gamePoint: 21,
        maxCap: 30,
        timing: '',
        courts: 1,
        teams: {
            A: { name: 'Team A', players: 'Sathish Family' },
            B: { name: 'Team B', players: 'Velu Family' },
            C: { name: 'Team C', players: 'Dr. Anadaraja - Rama' },
            D: { name: 'Team D', players: 'Nagaraj - Reena' },
            E: { name: 'Team E', players: 'Saravanan - Swastika' },
            F: { name: 'Team F', players: 'Divya - (Lucky Draw)' },
        },
        fixtures: [
            { round: 1, label: 'Round 1', matches: [
                { id: 'MX-R1M1', teamA: 'A', teamB: 'B', referee: 'Saravanan', court: 1 },
                { id: 'MX-R1M2', teamA: 'C', teamB: 'D', referee: 'Velu', court: 1 },
                { id: 'MX-R1M3', teamA: 'E', teamB: 'F', referee: 'Sathish', court: 1 },
            ]},
            { round: 2, label: 'Round 2 (Winners)', matches: [
                { id: 'MX-R2M1', teamA: 'W1', teamB: 'W2', referee: 'JK', court: 1, dynamic: true },
                { id: 'MX-R2M2', teamA: 'W2', teamB: 'W3', referee: 'Subhash', court: 1, dynamic: true },
                { id: 'MX-R2M3', teamA: 'W3', teamB: 'W1', referee: 'Ashok', court: 1, dynamic: true },
            ]},
            { round: 3, label: 'Round 3 (Runners)', matches: [
                { id: 'MX-R3M1', teamA: 'R1', teamB: 'R2', referee: 'Santhosh', court: 1, dynamic: true },
                { id: 'MX-R3M2', teamA: 'R2', teamB: 'R3', referee: 'Siva', court: 1, dynamic: true },
                { id: 'MX-R3M3', teamA: 'R3', teamB: 'R1', referee: 'Dinesh', court: 1, dynamic: true },
            ]},
        ],
    },

    womens: {
        id: 'womens',
        title: "Women's Doubles",
        shortTitle: "Women's Doubles",
        format: 'roundRobin',
        scoring: 20,
        gamePoint: 21,
        maxCap: 30,
        timing: '10:50 AM - 11:15 AM',
        courts: 2,
        teams: {
            A: { name: 'Team A', players: 'Rama & Divya' },
            B: { name: 'Team B', players: 'Prema & Reena' },
            C: { name: 'Team C', players: 'Durga & Swastika' },
        },
        fixtures: [
            { round: 1, matches: [
                { id: 'W-R1M1', teamA: 'A', teamB: 'B', referee: '', court: 1 },
            ]},
            { round: 2, matches: [
                { id: 'W-R2M1', teamA: 'B', teamB: 'C', referee: '', court: 1 },
            ]},
            { round: 3, matches: [
                { id: 'W-R3M1', teamA: 'C', teamB: 'A', referee: '', court: 1 },
            ]},
        ],
    },

    kidsDoubles: {
        id: 'kidsDoubles',
        title: "Kid's Doubles",
        shortTitle: "Kid's Doubles",
        format: 'roundRobin',
        scoring: 20,
        gamePoint: 21,
        maxCap: 30,
        timing: '10:20 AM - 10:45 AM',
        courts: 2,
        teams: {
            A: { name: 'Team A', players: 'Yanavel & Dharun' },
            B: { name: 'Team B', players: 'Balu & Sharwesh' },
            C: { name: 'Team C', players: 'Easan & Sharwesh' },
        },
        fixtures: [
            { round: 1, matches: [
                { id: 'KD-R1M1', teamA: 'A', teamB: 'C', referee: 'Saravanan', court: 1 },
            ]},
            { round: 2, matches: [
                { id: 'KD-R2M1', teamA: 'C', teamB: 'B', referee: 'Santhosh', court: 2 },
            ]},
            { round: 3, matches: [
                { id: 'KD-R3M1', teamA: 'B', teamB: 'A', referee: 'Sathish', court: 1 },
            ]},
        ],
    },

    kidsSingles: {
        id: 'kidsSingles',
        title: "Kid's Women Singles",
        shortTitle: "Kid's Singles",
        format: 'bestOf3',
        scoring: 21,
        gamePoint: 21,
        maxCap: 30,
        timing: '',
        courts: 1,
        teams: {
            A: { name: 'Diyaa', players: 'Diyaa' },
            B: { name: 'Isai', players: 'Isai' },
        },
        fixtures: [
            { round: 1, label: 'Game 1', matches: [
                { id: 'KS-G1', teamA: 'A', teamB: 'B', referee: '', court: 1 },
            ]},
            { round: 2, label: 'Game 2', matches: [
                { id: 'KS-G2', teamA: 'B', teamB: 'A', referee: '', court: 1 },
            ]},
            { round: 3, label: 'Game 3 (if needed)', matches: [
                { id: 'KS-G3', teamA: 'A', teamB: 'B', referee: '', court: 1 },
            ]},
        ],
    },
};


// ============================================
// STATE MANAGEMENT
// ============================================

const STORAGE_KEY = 'badminton_tournament_v1';

let state = {
    matches: {},       // matchId -> { scoreA, scoreB, finished, winner, log, faults, timerSeconds }
    currentCategory: null,
    currentMatch: null,
    timerInterval: null,
};

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            state.matches = parsed.matches || {};
        }
    } catch (e) {
        console.error('Failed to load state:', e);
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            matches: state.matches,
        }));
    } catch (e) {
        console.error('Failed to save state:', e);
    }
}

function getMatchState(matchId) {
    if (!state.matches[matchId]) {
        state.matches[matchId] = {
            scoreA: 0,
            scoreB: 0,
            finished: false,
            winner: null,
            log: [],
            faults: { A: { out: 0, netHit: 0, netTouch: 0, doubleHit: 0 }, B: { out: 0, netHit: 0, netTouch: 0, doubleHit: 0 } },
            timerSeconds: 0,
        };
    }
    return state.matches[matchId];
}

function resetAllData() {
    state.matches = {};
    saveState();
    navigate('#/');
}


// ============================================
// HASH ROUTER
// ============================================
// Routes:
//   #/                           -> Dashboard
//   #/category/:catId            -> Category page
//   #/scoring/:catId/:matchId    -> Live scoring page

function navigate(hash) {
    if (window.location.hash !== hash) {
        window.location.hash = hash;
    } else {
        // Hash is the same, but we still need to render (e.g., init)
        handleRoute();
    }
}

function handleRoute() {
    const hash = window.location.hash || '#/';
    const parts = hash.replace('#/', '').split('/');

    // Stop timer when leaving scoring page
    stopTimer();

    if (parts[0] === 'category' && parts[1]) {
        const catId = parts[1];
        if (TOURNAMENT_DATA[catId]) {
            renderCategoryPage(catId);
            return;
        }
    }

    if (parts[0] === 'scoring' && parts[1] && parts[2]) {
        const catId = parts[1];
        const matchId = parts[2];
        if (TOURNAMENT_DATA[catId]) {
            renderScoringPage(catId, matchId);
            return;
        }
    }

    // Default: dashboard
    renderDashboard();
}

window.addEventListener('hashchange', handleRoute);


// ============================================
// NAVIGATION (route triggers)
// ============================================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

function goToDashboard() {
    navigate('#/');
}

function openCategory(catId) {
    navigate(`#/category/${catId}`);
}

// Actual render functions called by the router

function renderDashboard() {
    stopTimer();
    state.currentCategory = null;
    state.currentMatch = null;
    updateDashboardStatuses();
    showPage('dashboard');
}

function renderCategoryPage(catId) {
    state.currentCategory = catId;
    state.currentMatch = null;
    const cat = TOURNAMENT_DATA[catId];
    document.getElementById('categoryTitle').textContent = cat.title;
    document.getElementById('categoryScoring').textContent = `Scoring: ${cat.scoring} pts/match`;
    document.getElementById('categoryTiming').textContent = cat.timing ? `Time: ${cat.timing}` : '';

    // Set header color based on category
    const headerColors = {
        seniors: '#2e7d32', kidsMens: '#1565c0', mixed: '#6a1b9a',
        womens: '#ad1457', kidsDoubles: '#00838f', kidsSingles: '#e65100'
    };
    const color = headerColors[catId] || '#2e7d32';
    document.querySelector('.category-header').style.background = `linear-gradient(135deg, ${color}, ${color}dd)`;
    document.querySelector('.tab-bar .tab.active').style.borderBottomColor = color;

    switchTab('matches');
    renderCategoryContent(catId);
    showPage('categoryPage');
}

function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).classList.add('active');
    document.getElementById(`${tabName}Tab`).classList.add('active');

    if (tabName === 'pointsTable') renderPointsTable(state.currentCategory);
    if (tabName === 'teams') renderTeamsList(state.currentCategory);
}


// ============================================
// RENDER - CATEGORY CONTENT
// ============================================

function renderCategoryContent(catId) {
    const cat = TOURNAMENT_DATA[catId];
    renderMatches(catId);
    renderPointsTable(catId);
    renderTeamsList(catId);
}

function renderMatches(catId) {
    const cat = TOURNAMENT_DATA[catId];
    const container = document.getElementById('roundsContainer');
    container.innerHTML = '';

    cat.fixtures.forEach(round => {
        const section = document.createElement('div');
        section.className = 'round-section';

        const roundLabel = round.label || `Round ${round.round}`;
        section.innerHTML = `<div class="round-header">${roundLabel}</div>`;

        round.matches.forEach(match => {
            const ms = getMatchState(match.id);
            const resolved = resolveTeams(catId, match);
            const teamAInfo = resolved.teamA;
            const teamBInfo = resolved.teamB;

            let statusBadge = '';
            let scoreText = 'vs';
            if (ms.finished) {
                const winnerName = ms.winner === 'A' ? teamAInfo.name : teamBInfo.name;
                statusBadge = `<span class="match-result-badge win">${winnerName} Won</span>`;
                scoreText = `${ms.scoreA} - ${ms.scoreB}`;
            } else if (ms.scoreA > 0 || ms.scoreB > 0) {
                statusBadge = `<span class="match-result-badge live">LIVE</span>`;
                scoreText = `${ms.scoreA} - ${ms.scoreB}`;
            } else {
                statusBadge = `<span class="match-result-badge pending">Pending</span>`;
            }

            const canPlay = teamAInfo.resolved && teamBInfo.resolved;
            const playBtn = canPlay && !ms.finished
                ? `<button class="btn btn-primary btn-small" onclick="startScoring('${catId}', '${match.id}')">
                    ${ms.scoreA > 0 || ms.scoreB > 0 ? 'Resume' : 'Play'}</button>`
                : '';

            const card = document.createElement('div');
            card.className = 'match-card';
            card.innerHTML = `
                <div class="match-card-header">
                    <span>${match.referee ? 'Ref: ' + match.referee : ''}</span>
                    <span>Court ${match.court}</span>
                </div>
                <div class="match-card-body">
                    <div class="match-team">
                        <div class="match-team-name">${teamAInfo.name}</div>
                        <div class="match-team-players">${teamAInfo.players}</div>
                    </div>
                    <div class="match-score-display">${scoreText}</div>
                    <div class="match-team">
                        <div class="match-team-name">${teamBInfo.name}</div>
                        <div class="match-team-players">${teamBInfo.players}</div>
                    </div>
                </div>
                <div class="match-card-footer">
                    ${statusBadge}
                    ${playBtn}
                </div>
            `;
            section.appendChild(card);
        });

        container.appendChild(section);
    });

    // For best-of-3, show overall status
    if (cat.format === 'bestOf3') {
        const overallStatus = getBestOf3Status(catId);
        if (overallStatus.matchWinner) {
            const winnerTeam = cat.teams[overallStatus.matchWinner];
            const div = document.createElement('div');
            div.className = 'winner-display';
            div.innerHTML = `
                <div class="winner-badge gold">Match Winner: ${winnerTeam.name}</div>
                <p style="margin-top:8px;font-size:0.85rem;color:#757575;">
                    Games Won - ${cat.teams.A.name}: ${overallStatus.winsA} | ${cat.teams.B.name}: ${overallStatus.winsB}
                </p>
            `;
            container.appendChild(div);
        } else {
            const div = document.createElement('div');
            div.className = 'text-center mt-16';
            div.innerHTML = `<p style="font-size:0.85rem;color:#757575;">
                Best of 3 - Games Won: ${cat.teams.A.name} ${overallStatus.winsA} | ${cat.teams.B.name} ${overallStatus.winsB}
            </p>`;
            container.appendChild(div);
        }
    }
}

function resolveTeams(catId, match) {
    const cat = TOURNAMENT_DATA[catId];

    if (!match.dynamic) {
        return {
            teamA: { ...cat.teams[match.teamA], key: match.teamA, resolved: true },
            teamB: { ...cat.teams[match.teamB], key: match.teamB, resolved: true },
        };
    }

    // Resolve dynamic teams (W1, W2, W3, R1, R2, R3) for knockout format
    const r1Matches = cat.fixtures[0].matches;

    const resolve = (code) => {
        let matchIndex, getWinnerOrRunner;

        if (code.startsWith('W')) {
            matchIndex = parseInt(code[1]) - 1;
            getWinnerOrRunner = 'winner';
        } else if (code.startsWith('R')) {
            matchIndex = parseInt(code[1]) - 1;
            getWinnerOrRunner = 'runner';
        }

        const sourceMatch = r1Matches[matchIndex];
        if (!sourceMatch) return { name: code, players: 'TBD', resolved: false };

        const ms = getMatchState(sourceMatch.id);
        if (!ms.finished) return { name: code, players: 'Waiting...', resolved: false };

        let teamKey;
        if (getWinnerOrRunner === 'winner') {
            teamKey = ms.winner === 'A' ? sourceMatch.teamA : sourceMatch.teamB;
        } else {
            teamKey = ms.winner === 'A' ? sourceMatch.teamB : sourceMatch.teamA;
        }

        return { ...cat.teams[teamKey], key: teamKey, resolved: true };
    };

    return {
        teamA: resolve(match.teamA),
        teamB: resolve(match.teamB),
    };
}


// ============================================
// RENDER - POINTS TABLE
// ============================================

function renderPointsTable(catId) {
    const cat = TOURNAMENT_DATA[catId];
    const container = document.getElementById('pointsTableContainer');
    const winnerDisplay = document.getElementById('winnerDisplay');
    container.innerHTML = '';
    winnerDisplay.innerHTML = '';
    winnerDisplay.classList.add('hidden');

    if (cat.format === 'bestOf3') {
        renderBestOf3Table(catId, container, winnerDisplay);
        return;
    }

    if (cat.format === 'knockout') {
        renderKnockoutTable(catId, container, winnerDisplay);
        return;
    }

    // Round-Robin points table
    const standings = calculateRoundRobinStandings(catId);

    const table = document.createElement('table');
    table.className = 'points-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>#</th>
                <th class="team-cell">Team</th>
                <th>P</th>
                <th>W</th>
                <th>L</th>
                <th>Pts</th>
                <th>+/-</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector('tbody');
    standings.forEach((s, i) => {
        const team = cat.teams[s.teamKey];
        const rowClass = i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : '';
        tbody.innerHTML += `
            <tr class="${rowClass}">
                <td>${i + 1}</td>
                <td class="team-cell">${team.name}<br><small style="color:#757575">${team.players}</small></td>
                <td>${s.played}</td>
                <td>${s.won}</td>
                <td>${s.lost}</td>
                <td><strong>${s.points}</strong></td>
                <td>${s.scoreDiff > 0 ? '+' : ''}${s.scoreDiff}</td>
            </tr>
        `;
    });

    container.appendChild(table);

    // Check if all matches are done
    const allDone = allMatchesFinished(catId);
    if (allDone && standings.length > 0) {
        winnerDisplay.classList.remove('hidden');
        const winner = cat.teams[standings[0].teamKey];
        const runner = cat.teams[standings[1].teamKey];
        winnerDisplay.innerHTML = `
            <div class="winner-badge gold">Winner: ${winner.name} (${winner.players})</div>
            <div class="winner-badge silver">Runner-up: ${runner.name} (${runner.players})</div>
        `;
    }
}

function calculateRoundRobinStandings(catId) {
    const cat = TOURNAMENT_DATA[catId];
    const teamKeys = Object.keys(cat.teams);
    const stats = {};

    teamKeys.forEach(k => {
        stats[k] = { teamKey: k, played: 0, won: 0, lost: 0, points: 0, scored: 0, conceded: 0, scoreDiff: 0 };
    });

    cat.fixtures.forEach(round => {
        round.matches.forEach(match => {
            const ms = getMatchState(match.id);
            if (ms.finished) {
                const tA = match.teamA;
                const tB = match.teamB;
                stats[tA].played++;
                stats[tB].played++;
                stats[tA].scored += ms.scoreA;
                stats[tA].conceded += ms.scoreB;
                stats[tB].scored += ms.scoreB;
                stats[tB].conceded += ms.scoreA;

                if (ms.winner === 'A') {
                    stats[tA].won++;
                    stats[tA].points += 2;
                    stats[tB].lost++;
                } else {
                    stats[tB].won++;
                    stats[tB].points += 2;
                    stats[tA].lost++;
                }
            }
        });
    });

    teamKeys.forEach(k => {
        stats[k].scoreDiff = stats[k].scored - stats[k].conceded;
    });

    return Object.values(stats).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.scoreDiff !== a.scoreDiff) return b.scoreDiff - a.scoreDiff;
        if (b.won !== a.won) return b.won - a.won;
        return 0;
    });
}

function renderKnockoutTable(catId, container, winnerDisplay) {
    const cat = TOURNAMENT_DATA[catId];

    // Show results by round
    cat.fixtures.forEach(round => {
        const roundLabel = round.label || `Round ${round.round}`;
        let html = `<h3 style="margin:12px 0 8px;font-size:0.9rem;color:#1565c0;">${roundLabel}</h3>`;
        html += '<table class="points-table"><thead><tr><th>Match</th><th>Team A</th><th>Score</th><th>Team B</th><th>Result</th></tr></thead><tbody>';

        round.matches.forEach((match, idx) => {
            const ms = getMatchState(match.id);
            const resolved = resolveTeams(catId, match);
            const scoreText = ms.finished ? `${ms.scoreA} - ${ms.scoreB}` : (ms.scoreA || ms.scoreB ? `${ms.scoreA} - ${ms.scoreB}` : '-');
            const result = ms.finished
                ? (ms.winner === 'A' ? resolved.teamA.name + ' Won' : resolved.teamB.name + ' Won')
                : 'Pending';
            html += `<tr>
                <td>M${idx + 1}</td>
                <td class="team-cell">${resolved.teamA.name}</td>
                <td>${scoreText}</td>
                <td class="team-cell">${resolved.teamB.name}</td>
                <td>${result}</td>
            </tr>`;
        });

        html += '</tbody></table>';
        container.innerHTML += html;
    });

    // Show overall knockout summary
    const allDone = allMatchesFinished(catId);
    if (allDone) {
        // Calculate knockout standings from all rounds
        const knockoutStandings = calculateKnockoutStandings(catId);
        if (knockoutStandings.winner) {
            winnerDisplay.classList.remove('hidden');
            const winner = cat.teams[knockoutStandings.winner];
            const runner = cat.teams[knockoutStandings.runner];
            winnerDisplay.innerHTML = `
                <div class="winner-badge gold">Winner: ${winner.name} (${winner.players})</div>
                <div class="winner-badge silver">Runner-up: ${runner.name} (${runner.players})</div>
            `;
        }
    }
}

function calculateKnockoutStandings(catId) {
    const cat = TOURNAMENT_DATA[catId];
    const teamKeys = Object.keys(cat.teams);
    const stats = {};

    teamKeys.forEach(k => {
        stats[k] = { teamKey: k, wins: 0, scored: 0, conceded: 0 };
    });

    cat.fixtures.forEach(round => {
        round.matches.forEach(match => {
            const ms = getMatchState(match.id);
            if (ms.finished) {
                const resolved = resolveTeams(catId, match);
                if (resolved.teamA.key && resolved.teamB.key) {
                    const kA = resolved.teamA.key;
                    const kB = resolved.teamB.key;
                    stats[kA].scored += ms.scoreA;
                    stats[kA].conceded += ms.scoreB;
                    stats[kB].scored += ms.scoreB;
                    stats[kB].conceded += ms.scoreA;
                    if (ms.winner === 'A') {
                        stats[kA].wins++;
                    } else {
                        stats[kB].wins++;
                    }
                }
            }
        });
    });

    const sorted = Object.values(stats).sort((a, b) => {
        if (b.wins !== a.wins) return b.wins - a.wins;
        return (b.scored - b.conceded) - (a.scored - a.conceded);
    });

    return {
        winner: sorted[0] ? sorted[0].teamKey : null,
        runner: sorted[1] ? sorted[1].teamKey : null,
    };
}

function renderBestOf3Table(catId, container, winnerDisplay) {
    const cat = TOURNAMENT_DATA[catId];
    const status = getBestOf3Status(catId);

    let html = '<table class="points-table"><thead><tr><th>Game</th><th>' + cat.teams.A.name + '</th><th>' + cat.teams.B.name + '</th><th>Winner</th></tr></thead><tbody>';

    cat.fixtures.forEach((round, idx) => {
        const match = round.matches[0];
        const ms = getMatchState(match.id);
        const scoreA = ms.finished ? ms.scoreA : '-';
        const scoreB = ms.finished ? ms.scoreB : '-';
        const winner = ms.finished ? (ms.winner === 'A' ? cat.teams[match.teamA].name : cat.teams[match.teamB].name) : 'Pending';
        html += `<tr><td>Game ${idx + 1}</td><td>${scoreA}</td><td>${scoreB}</td><td>${winner}</td></tr>`;
    });

    html += '</tbody></table>';
    container.innerHTML = html;

    if (status.matchWinner) {
        winnerDisplay.classList.remove('hidden');
        const winner = cat.teams[status.matchWinner];
        winnerDisplay.innerHTML = `<div class="winner-badge gold">Match Winner: ${winner.name}</div>
            <p style="margin-top:8px;font-size:0.85rem;">Games: ${cat.teams.A.name} ${status.winsA} - ${status.winsB} ${cat.teams.B.name}</p>`;
    }
}

function getBestOf3Status(catId) {
    const cat = TOURNAMENT_DATA[catId];
    let winsA = 0, winsB = 0;

    cat.fixtures.forEach(round => {
        const match = round.matches[0];
        const ms = getMatchState(match.id);
        if (ms.finished) {
            // Map winner back to original team
            const winnerKey = ms.winner === 'A' ? match.teamA : match.teamB;
            if (winnerKey === 'A') winsA++;
            else winsB++;
        }
    });

    let matchWinner = null;
    if (winsA >= 2) matchWinner = 'A';
    if (winsB >= 2) matchWinner = 'B';

    return { winsA, winsB, matchWinner };
}


// ============================================
// RENDER - TEAMS LIST
// ============================================

function renderTeamsList(catId) {
    const cat = TOURNAMENT_DATA[catId];
    const container = document.getElementById('teamsContainer');
    container.innerHTML = '';

    const headerColors = {
        seniors: '#2e7d32', kidsMens: '#1565c0', mixed: '#6a1b9a',
        womens: '#ad1457', kidsDoubles: '#00838f', kidsSingles: '#e65100'
    };
    const color = headerColors[catId] || '#2e7d32';

    const list = document.createElement('div');
    list.className = 'team-list';

    Object.entries(cat.teams).forEach(([key, team]) => {
        list.innerHTML += `
            <div class="team-item">
                <div class="team-letter" style="background:${color}">${key}</div>
                <div class="team-details">
                    <div class="name">${team.name}</div>
                    <div class="players">${team.players}</div>
                </div>
            </div>
        `;
    });

    container.appendChild(list);
}


// ============================================
// LIVE SCORING
// ============================================

function startScoring(catId, matchId) {
    navigate(`#/scoring/${catId}/${matchId}`);
}

function renderScoringPage(catId, matchId) {
    const cat = TOURNAMENT_DATA[catId];
    state.currentCategory = catId;
    state.currentMatch = matchId;

    // Find the match fixture
    let matchFixture = null;
    for (const round of cat.fixtures) {
        for (const m of round.matches) {
            if (m.id === matchId) { matchFixture = m; break; }
        }
        if (matchFixture) break;
    }

    if (!matchFixture) {
        navigate('#/');
        return;
    }

    const resolved = resolveTeams(catId, matchFixture);
    const ms = getMatchState(matchId);

    // Set up UI
    document.getElementById('scoringMatchTitle').textContent = `${resolved.teamA.name} vs ${resolved.teamB.name}`;
    document.getElementById('scoringReferee').textContent = matchFixture.referee ? `Referee: ${matchFixture.referee}` : '';
    document.getElementById('scoringCourt').textContent = `Court ${matchFixture.court}`;

    document.getElementById('scoringTeamA').textContent = `${resolved.teamA.name}`;
    document.getElementById('scoringTeamB').textContent = `${resolved.teamB.name}`;
    document.getElementById('faultLabelA').textContent = `${resolved.teamA.name} faults:`;
    document.getElementById('faultLabelB').textContent = `${resolved.teamB.name} faults:`;

    updateScoreDisplay();
    renderScoreLog();
    updateScoringStatus();

    // Best of 3 game info
    if (cat.format === 'bestOf3') {
        const status = getBestOf3Status(catId);
        document.getElementById('scoringGameInfo').textContent = `Games: ${cat.teams.A.name} ${status.winsA} - ${status.winsB} ${cat.teams.B.name}`;
    } else {
        document.getElementById('scoringGameInfo').textContent = '';
    }

    // Handle finished match state
    const scoringPage = document.getElementById('scoringPage');
    if (ms.finished) {
        scoringPage.classList.add('match-finished');
    } else {
        scoringPage.classList.remove('match-finished');
    }

    // Start timer
    startTimer();

    showPage('scoringPage');
}

function exitScoring() {
    stopTimer();
    state.currentMatch = null;
    navigate(`#/category/${state.currentCategory}`);
}

function updateScoreDisplay() {
    const ms = getMatchState(state.currentMatch);
    const scoreAEl = document.getElementById('scoreA');
    const scoreBEl = document.getElementById('scoreB');

    scoreAEl.textContent = ms.scoreA;
    scoreBEl.textContent = ms.scoreB;

    // Bump animation
    scoreAEl.classList.remove('bump');
    scoreBEl.classList.remove('bump');
    void scoreAEl.offsetWidth; // Force reflow
}

function updateScoringStatus() {
    const ms = getMatchState(state.currentMatch);
    const cat = TOURNAMENT_DATA[state.currentCategory];
    const statusEl = document.getElementById('scoringStatus');
    const gamePoint = cat.gamePoint;
    const maxCap = cat.maxCap;

    if (ms.finished) {
        statusEl.textContent = 'Match Over';
        statusEl.className = 'status-gameover';
        document.getElementById('scoringPage').classList.add('match-finished');
        return;
    }

    const a = ms.scoreA;
    const b = ms.scoreB;

    if (a >= 20 && b >= 20 && a < maxCap - 1 && b < maxCap - 1) {
        statusEl.textContent = `DEUCE! (${a}-${b}) - Win by 2`;
        statusEl.className = 'status-deuce';
    } else if (a === maxCap - 1 && b === maxCap - 1) {
        statusEl.textContent = `${a}-${b} - Next point wins!`;
        statusEl.className = 'status-deuce';
    } else if (a === gamePoint - 1 || b === gamePoint - 1) {
        const leading = a > b ? 'A' : 'B';
        statusEl.textContent = `Game Point!`;
        statusEl.className = 'status-deuce';
    } else {
        statusEl.textContent = 'In Progress';
        statusEl.className = 'status-normal';
    }
}


// ============================================
// SCORING LOGIC - ALL SCENARIOS
// ============================================

function addPoint(side) {
    const ms = getMatchState(state.currentMatch);
    if (ms.finished) return;

    const cat = TOURNAMENT_DATA[state.currentCategory];

    if (side === 'A') {
        ms.scoreA++;
    } else {
        ms.scoreB++;
    }

    ms.log.push({ action: 'point', side, scoreA: ms.scoreA, scoreB: ms.scoreB, time: ms.timerSeconds });

    // Animate score bump + confetti
    const el = document.getElementById(side === 'A' ? 'scoreA' : 'scoreB');
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 200);
    launchConfetti(side);

    checkWinCondition(ms, cat);
    updateScoreDisplay();
    updateScoringStatus();
    renderScoreLog();
    saveState();
}

function removePoint(side) {
    const ms = getMatchState(state.currentMatch);
    if (ms.finished) return;

    if (side === 'A' && ms.scoreA > 0) {
        ms.scoreA--;
    } else if (side === 'B' && ms.scoreB > 0) {
        ms.scoreB--;
    } else {
        return;
    }

    ms.log.push({ action: 'remove', side, scoreA: ms.scoreA, scoreB: ms.scoreB, time: ms.timerSeconds });

    updateScoreDisplay();
    updateScoringStatus();
    renderScoreLog();
    saveState();
}

function recordFault(faultingSide, faultType) {
    const ms = getMatchState(state.currentMatch);
    if (ms.finished) return;

    ms.faults[faultingSide][faultType]++;

    // Award point to the OTHER side
    const scoringSide = faultingSide === 'A' ? 'B' : 'A';
    const cat = TOURNAMENT_DATA[state.currentCategory];

    if (scoringSide === 'A') {
        ms.scoreA++;
    } else {
        ms.scoreB++;
    }

    const faultNames = { out: 'Out of Court', netHit: 'Net Hit', netTouch: 'Net Touch', doubleHit: 'Double Hit' };
    ms.log.push({
        action: 'fault',
        faultingSide,
        faultType: faultNames[faultType],
        scoringSide,
        scoreA: ms.scoreA,
        scoreB: ms.scoreB,
        time: ms.timerSeconds,
    });

    // Animate score bump + confetti (on the scoring side, not the faulting side)
    const el = document.getElementById(scoringSide === 'A' ? 'scoreA' : 'scoreB');
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 200);
    launchConfetti(scoringSide);

    checkWinCondition(ms, cat);
    updateScoreDisplay();
    updateScoringStatus();
    renderScoreLog();
    saveState();
}

function checkWinCondition(ms, cat) {
    const gamePoint = cat.gamePoint; // 21
    const maxCap = cat.maxCap;       // 30
    const a = ms.scoreA;
    const b = ms.scoreB;

    // Scenario 1: Normal win - reach 21 with opponent at 19 or less
    // e.g., 21-18, 21-0, 21-19
    if ((a >= gamePoint && b < gamePoint - 1) || (b >= gamePoint && a < gamePoint - 1)) {
        declareWinner(ms, a > b ? 'A' : 'B');
        return;
    }

    // Scenario 2: Deuce zone (both >= 20) - must win by 2
    // e.g., 22-20, 23-21, 24-22, etc.
    if (a >= 20 && b >= 20) {
        if (Math.abs(a - b) >= 2) {
            declareWinner(ms, a > b ? 'A' : 'B');
            return;
        }

        // Scenario 3: Maximum cap at 30 - at 29-29, next point wins (30-29)
        if (a >= maxCap || b >= maxCap) {
            declareWinner(ms, a > b ? 'A' : 'B');
            return;
        }
    }
}

function declareWinner(ms, winner) {
    ms.finished = true;
    ms.winner = winner;

    const cat = TOURNAMENT_DATA[state.currentCategory];
    const matchFixture = findMatchFixture(state.currentCategory, state.currentMatch);
    const resolved = resolveTeams(state.currentCategory, matchFixture);

    const winnerName = winner === 'A' ? resolved.teamA.name : resolved.teamB.name;

    // Show win modal
    document.getElementById('winTitle').textContent = `${winnerName} Wins!`;
    document.getElementById('winMessage').textContent = `${resolved.teamA.name} vs ${resolved.teamB.name}`;
    document.getElementById('winScore').textContent = `${ms.scoreA} - ${ms.scoreB}`;
    document.getElementById('winModal').classList.remove('hidden');

    stopTimer();
    document.getElementById('scoringPage').classList.add('match-finished');
    updateScoringStatus();
    saveState();
}

function finishMatch() {
    const ms = getMatchState(state.currentMatch);

    if (ms.finished) {
        exitScoring();
        return;
    }

    // Manual finish - determine winner by current score
    if (ms.scoreA === ms.scoreB) {
        showModal('Cannot Finish', 'Scores are tied. A match must have a winner. Please continue playing.', null);
        return;
    }

    showModal(
        'Finish Match?',
        `End the match with score ${ms.scoreA} - ${ms.scoreB}?`,
        () => {
            const winner = ms.scoreA > ms.scoreB ? 'A' : 'B';
            declareWinner(ms, winner);
            closeModal();
        }
    );
}

function undoLastAction() {
    const ms = getMatchState(state.currentMatch);
    if (ms.finished || ms.log.length === 0) return;

    const lastEntry = ms.log.pop();

    if (lastEntry.action === 'point') {
        if (lastEntry.side === 'A') ms.scoreA--;
        else ms.scoreB--;
    } else if (lastEntry.action === 'fault') {
        if (lastEntry.scoringSide === 'A') ms.scoreA--;
        else ms.scoreB--;
        // Also undo the fault count
        const faultTypeMap = { 'Out of Court': 'out', 'Net Hit': 'netHit', 'Net Touch': 'netTouch', 'Double Hit': 'doubleHit' };
        const faultKey = faultTypeMap[lastEntry.faultType];
        if (faultKey) ms.faults[lastEntry.faultingSide][faultKey]--;
    } else if (lastEntry.action === 'remove') {
        if (lastEntry.side === 'A') ms.scoreA++;
        else ms.scoreB++;
    }

    updateScoreDisplay();
    updateScoringStatus();
    renderScoreLog();
    saveState();
}


// ============================================
// SCORE LOG
// ============================================

function renderScoreLog() {
    const ms = getMatchState(state.currentMatch);
    const list = document.getElementById('scoreLogList');
    list.innerHTML = '';

    const cat = TOURNAMENT_DATA[state.currentCategory];
    const matchFixture = findMatchFixture(state.currentCategory, state.currentMatch);
    const resolved = resolveTeams(state.currentCategory, matchFixture);

    // Show latest first
    const reversedLog = [...ms.log].reverse();
    reversedLog.forEach(entry => {
        const timeStr = formatTime(entry.time);
        const div = document.createElement('div');
        div.className = 'log-entry';

        if (entry.action === 'point') {
            const teamName = entry.side === 'A' ? resolved.teamA.name : resolved.teamB.name;
            div.innerHTML = `<span class="log-action">+1 ${teamName}</span><span class="log-score">${entry.scoreA}-${entry.scoreB} (${timeStr})</span>`;
        } else if (entry.action === 'fault') {
            const faultingName = entry.faultingSide === 'A' ? resolved.teamA.name : resolved.teamB.name;
            div.innerHTML = `<span class="log-action">${faultingName}: ${entry.faultType}</span><span class="log-score">${entry.scoreA}-${entry.scoreB} (${timeStr})</span>`;
        } else if (entry.action === 'remove') {
            const teamName = entry.side === 'A' ? resolved.teamA.name : resolved.teamB.name;
            div.innerHTML = `<span class="log-action">-1 ${teamName}</span><span class="log-score">${entry.scoreA}-${entry.scoreB} (${timeStr})</span>`;
        }

        list.appendChild(div);
    });
}


// ============================================
// MATCH TIMER
// ============================================

function startTimer() {
    stopTimer();
    const ms = getMatchState(state.currentMatch);
    if (ms.finished) {
        document.getElementById('matchTimer').textContent = formatTime(ms.timerSeconds);
        return;
    }

    updateTimerDisplay(ms.timerSeconds);
    state.timerInterval = setInterval(() => {
        ms.timerSeconds++;
        updateTimerDisplay(ms.timerSeconds);
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
    saveState();
}

function updateTimerDisplay(seconds) {
    document.getElementById('matchTimer').textContent = formatTime(seconds);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}


// ============================================
// HELPERS
// ============================================

function findMatchFixture(catId, matchId) {
    const cat = TOURNAMENT_DATA[catId];
    for (const round of cat.fixtures) {
        for (const m of round.matches) {
            if (m.id === matchId) return m;
        }
    }
    return null;
}

function allMatchesFinished(catId) {
    const cat = TOURNAMENT_DATA[catId];

    if (cat.format === 'bestOf3') {
        // For best of 3, check if someone has 2 wins
        const status = getBestOf3Status(catId);
        return status.matchWinner !== null;
    }

    for (const round of cat.fixtures) {
        for (const match of round.matches) {
            const ms = getMatchState(match.id);
            if (!ms.finished) return false;
        }
    }
    return true;
}

function getCategoryStatus(catId) {
    const cat = TOURNAMENT_DATA[catId];
    let totalMatches = 0;
    let finishedMatches = 0;

    cat.fixtures.forEach(round => {
        round.matches.forEach(match => {
            totalMatches++;
            const ms = getMatchState(match.id);
            if (ms.finished) finishedMatches++;
        });
    });

    if (finishedMatches === 0) return 'not-started';
    if (cat.format === 'bestOf3') {
        const status = getBestOf3Status(catId);
        if (status.matchWinner) return 'completed';
    }
    if (finishedMatches >= totalMatches) return 'completed';
    return 'in-progress';
}

function updateDashboardStatuses() {
    Object.keys(TOURNAMENT_DATA).forEach(catId => {
        const status = getCategoryStatus(catId);
        const el = document.getElementById(`${catId}-status`);
        if (!el) return;

        el.classList.remove('in-progress', 'completed');
        if (status === 'not-started') {
            el.textContent = 'Not Started';
        } else if (status === 'in-progress') {
            el.textContent = 'In Progress';
            el.classList.add('in-progress');
        } else {
            el.textContent = 'Completed';
            el.classList.add('completed');
        }
    });
}


// ============================================
// MODALS
// ============================================

let _modalConfirmFn = null;

function showModal(title, message, confirmFn) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    _modalConfirmFn = confirmFn;
    document.getElementById('modal').classList.remove('hidden');

    if (!confirmFn) {
        // Just info modal
        document.getElementById('modalConfirmBtn').style.display = 'none';
    } else {
        document.getElementById('modalConfirmBtn').style.display = '';
    }
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    _modalConfirmFn = null;
}

function modalConfirmAction() {
    if (_modalConfirmFn) _modalConfirmFn();
}

function closeWinModal() {
    document.getElementById('winModal').classList.add('hidden');
}

function confirmResetAll() {
    showModal('Reset All Data?', 'This will clear all scores and match results. This cannot be undone.', () => {
        resetAllData();
        closeModal();
    });
}


// ============================================
// PIN-PROTECTED ADMIN
// ============================================

const ADMIN_PIN = '1040';

function showPinPrompt() {
    const overlay = document.getElementById('pinOverlay');
    const input = document.getElementById('pinInput');
    const error = document.getElementById('pinError');
    input.value = '';
    error.classList.add('hidden');
    overlay.classList.remove('hidden');
    setTimeout(() => input.focus(), 100);
}

function closePinPrompt() {
    document.getElementById('pinOverlay').classList.add('hidden');
    document.getElementById('pinInput').value = '';
    document.getElementById('pinError').classList.add('hidden');
}

function verifyPin() {
    const input = document.getElementById('pinInput');
    const error = document.getElementById('pinError');

    if (input.value === ADMIN_PIN) {
        closePinPrompt();
        confirmResetAll();
    } else {
        error.classList.remove('hidden');
        input.value = '';
        input.focus();
    }
}

// Allow pressing Enter in PIN field
document.addEventListener('DOMContentLoaded', () => {
    const pinInput = document.getElementById('pinInput');
    if (pinInput) {
        pinInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') verifyPin();
        });
    }
});


// ============================================
// CONFETTI
// ============================================

const CONFETTI_COLORS = ['#4caf50', '#ff9800', '#e91e63', '#2196f3', '#ffeb3b', '#9c27b0', '#00bcd4', '#ff5722'];
const CONFETTI_SHAPES = ['circle', 'square', 'strip'];

function launchConfetti(side) {
    const container = document.getElementById('confettiContainer');
    const count = 30;

    // Determine burst origin: left half for Team A, right half for Team B
    const originX = side === 'A' ? 20 : 80; // % from left

    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        const shape = CONFETTI_SHAPES[Math.floor(Math.random() * CONFETTI_SHAPES.length)];
        const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        const x = originX + (Math.random() - 0.5) * 40;  // spread around origin
        const delay = Math.random() * 0.2;
        const duration = 0.7 + Math.random() * 0.6;
        const rotation = (Math.random() - 0.5) * 720;

        piece.className = `confetti-piece ${shape}`;
        piece.style.cssText = `
            left: ${x}%;
            top: 15%;
            background: ${color};
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            --rotation: ${rotation}deg;
        `;

        container.appendChild(piece);
    }

    // Clean up after animation finishes
    setTimeout(() => {
        container.innerHTML = '';
    }, 1500);
}


// ============================================
// RULES TOGGLE
// ============================================

function toggleRules() {
    const content = document.getElementById('rulesContent');
    const arrow = document.getElementById('rulesArrow');
    content.classList.toggle('open');
    arrow.classList.toggle('open');
}


// ============================================
// INITIALIZATION
// ============================================

function init() {
    loadState();
    handleRoute(); // Render based on current hash (supports refresh & bookmarks)
}

// Run on load
init();
