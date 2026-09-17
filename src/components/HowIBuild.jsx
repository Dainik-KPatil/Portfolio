import {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  CheckCircle2,
  Database,
  FileCheck2,
  GitBranch,
  Layers3,
  RefreshCw,
  ScanSearch,
  ShieldCheck,
  TerminalSquare,
  Users,
} from "lucide-react";

/* =========================================================
   FUNCTIONAL PHASES

   These describe WHAT the system is doing,
   rather than naming technologies.
========================================================= */

const phases = [
  {
    number: "01",
    title: "Validate the Input",
    short: "Confirm the request before processing begins.",
    description:
      "Check the uploaded attendance file and selected month before allowing the workflow to continue.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Normalise the Data",
    short: "Convert different input formats into one usable structure.",
    description:
      "Read CSV, TXT or DAT input, normalise encoding and organise punch records employee-wise and date-wise.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Resolve Employee Context",
    short: "Identify who the incoming attendance belongs to.",
    description:
      "Match biometric records against valid employees and retrieve the employee context required by later calculations.",
    icon: Users,
  },
  {
    number: "04",
    title: "Load Work Rules",
    short: "Build the rule context before calculating attendance.",
    description:
      "Resolve shift timings, grace periods, holidays, weekly-off rules and approved flexible-work requests.",
    icon: ScanSearch,
  },
  {
    number: "05",
    title: "Evaluate Attendance",
    short: "Convert raw punches into meaningful daily status.",
    description:
      "Compare in/out punches against defined thresholds to identify presence, half days, late arrivals, early exits and missing punches.",
    icon: GitBranch,
  },
  {
    number: "06",
    title: "Apply Exceptions",
    short: "Business rules can override the basic calculation.",
    description:
      "Apply holidays, weekly offs, flexible-work approvals and related exceptions after the base attendance decision.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Process Connected Rules",
    short: "Evaluate how surrounding days affect the final result.",
    description:
      "Run connected calculations such as sandwich-leave handling and recalculate affected attendance totals.",
    icon: RefreshCw,
  },
  {
    number: "08",
    title: "Build Final Outcome",
    short: "Convert daily processing into usable business data.",
    description:
      "Prepare attendance summaries, payable-day values and the information needed by downstream salary processing.",
    icon: Database,
  },
  {
    number: "09",
    title: "Persist & Continue",
    short: "Save safely and trigger the next connected workflow.",
    description:
      "Persist logs and summaries, run dependent calculations and capture errors without losing visibility into the process.",
    icon: CheckCircle2,
  },
];

/* =========================================================
   CODE-LIKE FLOW

   This is intentionally representative rather than displaying
   the entire controller.

   phase determines which LEFT tile is highlighted.
========================================================= */

const codeGroups = [
  {
    phase: 0,
    label: "REQUEST VALIDATION",
    lines: [
      "public function import(Request $request)",
      "{",
      "    validateAttendanceRequest($request);",
      "    resolveAttendanceMonth($request);",
      "    verifyUploadedFile();",
      "",
    ],
  },

  {
    phase: 1,
    label: "INPUT NORMALISATION",
    lines: [
      "    $content = readUploadedAttendance();",
      "    $content = normaliseEncoding($content);",
      "    $delimiter = resolveFileDelimiter();",
      "",
      "    foreach ($rows as $row) {",
      "        parseEmployeeCode($row);",
      "        parsePunchTime($row);",
      "        groupPunchesByEmployeeAndDate();",
      "    }",
      "",
    ],
  },

  {
    phase: 2,
    label: "EMPLOYEE CONTEXT",
    lines: [
      "    foreach ($recordsByEmployee as $code => $records) {",
      "        $employee = resolveEmployeeFromBiometric($code);",
      "",
      "        if (!$employee) {",
      "            continue;",
      "        }",
      "",
      "        prepareEmployeeContext($employee);",
      "    }",
      "",
    ],
  },

  {
    phase: 3,
    label: "WORK RULE CONTEXT",
    lines: [
      "    $shift = resolveShift($employee);",
      "    $holidayMap = resolveBranchHolidays();",
      "    $weekOffRules = resolveWeeklyOffRules();",
      "    $flexibleRequests = resolveApprovedAdjustments();",
      "",
      "    $thresholds = buildAttendanceThresholds(",
      "        $shift,",
      "        $gracePeriod",
      "    );",
      "",
    ],
  },

  {
    phase: 4,
    label: "DAILY ATTENDANCE ENGINE",
    lines: [
      "    foreach ($dates as $date) {",
      "        $punch = resolvePunchForDate($date);",
      "",
      "        $status = evaluateInTime($punch);",
      "        $status = evaluateOutTime($punch, $status);",
      "        $status = evaluateWorkingHours($punch, $status);",
      "",
      "        detectLateArrival();",
      "        detectEarlyExit();",
      "        detectHalfDay();",
      "        detectMissingPunch();",
      "    }",
      "",
    ],
  },

  {
    phase: 5,
    label: "BUSINESS OVERRIDES",
    lines: [
      "    if (isHoliday($date)) {",
      "        markAsHoliday();",
      "    } elseif (isWeeklyOff($date)) {",
      "        markAsWeeklyOff();",
      "    } elseif (hasApprovedAdjustment($date)) {",
      "        applyApprovedAdjustment();",
      "    }",
      "",
    ],
  },

  {
    phase: 6,
    label: "CONNECTED RULE PROCESSING",
    lines: [
      "    foreach ($attendanceCalendar as $day) {",
      "        if (isHolidayOrWeekOff($day)) {",
      "            inspectAdjacentAttendance();",
      "",
      "            if (bothSidesAreAbsent()) {",
      "                applySandwichRule();",
      "            }",
      "        }",
      "    }",
      "",
    ],
  },

  {
    phase: 7,
    label: "SUMMARY GENERATION",
    lines: [
      "    $summary = calculateAttendanceSummary([",
      "        'present_days'  => $presentDays,",
      "        'half_days'     => $halfDays,",
      "        'absent_days'   => $absentDays,",
      "        'holidays'      => $holidays,",
      "        'week_offs'     => $weekOffs,",
      "        'payable_days'  => $payableDays,",
      "    ]);",
      "",
      "    queueSalaryRecalculation($summary);",
      "",
    ],
  },

  {
    phase: 8,
    label: "PERSISTENCE & DOWNSTREAM FLOW",
    lines: [
      "    saveAttendanceLogs();",
      "    saveAttendanceSummary();",
      "",
      "    foreach ($salaryQueue as $employee) {",
      "        recalculateSalary($employee);",
      "        processConnectedDeductions();",
      "    }",
      "",
      "    auditExecutionResult();",
      "",
      "    return successfulResponse();",
      "}",
    ],
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

function HowIBuild() {
  const [activePhase, setActivePhase] =
    useState(0);

  const [paused, setPaused] =
    useState(false);

  const codeContainerRef =
    useRef(null);

  const phaseRefs =
    useRef([]);

  /* =======================================================
     AUTO ADVANCE

     The code moves through each logical stage.
  ======================================================= */

  useEffect(() => {
    if (paused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActivePhase((current) => {
        return (
          (current + 1) %
          phases.length
        );
      });
    }, 2600);

    return () => {
      window.clearInterval(timer);
    };
  }, [paused]);

  /* =======================================================
     SCROLL CODE TO ACTIVE FUNCTIONAL BLOCK
  ======================================================= */

  useEffect(() => {
    const container =
      codeContainerRef.current;

    const target =
      phaseRefs.current[activePhase];

    if (!container || !target) {
      return;
    }

    const targetTop =
      target.offsetTop;

    const targetHeight =
      target.offsetHeight;

    const containerHeight =
      container.clientHeight;

    const scrollPosition =
      targetTop -
      containerHeight / 2 +
      targetHeight / 2;

    container.scrollTo({
      top: Math.max(
        0,
        scrollPosition,
      ),

      behavior: "smooth",
    });
  }, [activePhase]);

  const currentPhase =
    phases[activePhase];

  return (
    <section
      id="architecture"
      className="section-shell relative overflow-hidden border-t border-border"
      aria-labelledby="architecture-heading"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="technical-grid pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 top-28 size-[440px] rounded-full bg-accent/[0.035] blur-[150px]"
        aria-hidden="true"
      />

      {/* =====================================================
          SECTION
      ====================================================== */}

      <div className="site-container relative">
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.58fr)] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="section-eyebrow">
                How I Build
              </span>
            </div>

            <h2
              id="architecture-heading"
              className="section-heading mt-5 max-w-4xl"
            >
              COMPLEX RULES.
              <br />

              <span className="text-gradient-blue">
                CLEAR EXECUTION.
              </span>
            </h2>
          </div>

          <p className="section-copy max-w-xl lg:pb-1">
            I break larger business
            requirements into smaller
            decisions, define how data
            should move between them and
            execute the workflow in a
            predictable order.
          </p>
        </motion.div>

        {/* =================================================
            INTERACTIVE EXECUTION VIEW
        ================================================== */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="relative mt-10 overflow-hidden rounded-[26px] border border-border bg-surface/75 backdrop-blur-xl"
        >
          {/* accent */}

          <div
            className="pointer-events-none absolute left-0 top-0 z-20 h-px w-[68%] bg-gradient-to-r from-accent via-accent/35 to-transparent"
            aria-hidden="true"
          />

          {/* =================================================
              SMALL IDENTITY HEADER
          ================================================== */}

          <div className="flex flex-col gap-4 border-b border-border px-5 py-4 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                Business Logic Execution
              </p>

              <h3 className="mt-1.5 font-heading text-xl font-semibold tracking-[-0.03em] text-text-primary sm:text-2xl">
                From requirement to
                reliable workflow.
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-25" />

                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>

              <span className="font-code text-[7px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                Flow Simulation
              </span>
            </div>
          </div>

          {/* =================================================
              LEFT FUNCTIONAL FLOW + RIGHT CODE
          ================================================== */}

          <div className="grid lg:grid-cols-[minmax(300px,0.74fr)_minmax(0,1.26fr)]">
            {/* =============================================
                LEFT
            ============================================== */}

            <div className="border-b border-border p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">
              {/* current functionality */}

              <div className="mb-5">
                <p className="font-code text-[7px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Currently Processing
                </p>

                <motion.div
                  key={activePhase}
                  initial={{
                    opacity: 0,
                    y: 7,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="mt-2"
                >
                  <h4 className="font-heading text-xl font-semibold tracking-[-0.025em] text-text-primary">
                    {currentPhase.title}
                  </h4>

                  <p className="mt-1.5 max-w-md text-xs leading-5 text-text-secondary sm:text-[13px]">
                    {
                      currentPhase.description
                    }
                  </p>
                </motion.div>
              </div>

              {/* functionality tiles */}

              <div className="space-y-1">
                {phases.map(
                  (
                    phase,
                    index,
                  ) => {
                    const Icon =
                      phase.icon;

                    const active =
                      index ===
                      activePhase;

                    const completed =
                      index <
                      activePhase;

                    return (
                      <button
                        key={
                          phase.number
                        }
                        type="button"
                        onClick={() =>
                          setActivePhase(
                            index,
                          )
                        }
                        className={[
                          "group relative grid w-full grid-cols-[28px_28px_minmax(0,1fr)] items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-all duration-300",
                          active
                            ? "bg-accent-soft"
                            : "hover:bg-surface-alt/60",
                        ].join(
                          " ",
                        )}
                      >
                        {/* number */}

                        <span
                          className={[
                            "font-code text-[7px] font-semibold",
                            active
                              ? "text-accent"
                              : completed
                                ? "text-success"
                                : "text-text-muted",
                          ].join(
                            " ",
                          )}
                        >
                          {
                            phase.number
                          }
                        </span>

                        {/* icon */}

                        <span
                          className={[
                            "flex size-7 items-center justify-center rounded-lg border transition-colors duration-300",
                            active
                              ? "border-accent/30 bg-accent/10 text-accent"
                              : "border-border bg-background/40 text-text-muted",
                          ].join(
                            " ",
                          )}
                        >
                          <Icon
                            size={
                              13
                            }
                            strokeWidth={
                              1.8
                            }
                          />
                        </span>

                        {/* title */}

                        <div className="min-w-0">
                          <p
                            className={[
                              "truncate text-xs font-semibold transition-colors duration-300",
                              active
                                ? "text-text-primary"
                                : "text-text-secondary",
                            ].join(
                              " ",
                            )}
                          >
                            {
                              phase.title
                            }
                          </p>

                          {active && (
                            <motion.p
                              initial={{
                                opacity: 0,
                              }}
                              animate={{
                                opacity: 1,
                              }}
                              className="mt-0.5 truncate text-[10px] text-text-muted"
                            >
                              {
                                phase.short
                              }
                            </motion.p>
                          )}
                        </div>

                        {/* active marker */}

                        {active && (
                          <motion.span
                            layoutId="active-build-step"
                            className="absolute bottom-1.5 left-0 top-1.5 w-[2px] rounded-full bg-accent"
                          />
                        )}
                      </button>
                    );
                  },
                )}
              </div>
            </div>

            {/* =============================================
                RIGHT — CODE VIEW
            ============================================== */}

            <div
              className="relative min-w-0 bg-background/45"
              onMouseEnter={() =>
                setPaused(true)
              }
              onMouseLeave={() =>
                setPaused(false)
              }
            >
              {/* editor header */}

              <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#ff6b6b]" />
                  <span className="size-2 rounded-full bg-warm" />
                  <span className="size-2 rounded-full bg-success" />
                </div>

                <div className="flex items-center gap-2">
                  <TerminalSquare
                    size={12}
                    className="text-accent"
                  />

                  <span className="font-code text-[7px] uppercase tracking-[0.12em] text-text-muted">
                    WorkflowEngine
                  </span>
                </div>
              </div>

              {/* code viewport */}

              <div
                ref={
                  codeContainerRef
                }
                className="h-[520px] overflow-y-auto scroll-smooth px-4 py-5 sm:px-6"
                style={{
                  scrollbarWidth:
                    "thin",
                }}
              >
                <pre className="min-w-[580px] pb-[210px] font-code">
                  {codeGroups.map(
                    (
                      group,
                      groupIndex,
                    ) => {
                      const isActive =
                        activePhase ===
                        group.phase;

                      return (
                        <motion.div
                          key={
                            group.label
                          }
                          ref={(
                            element,
                          ) => {
                            phaseRefs.current[
                              group.phase
                            ] =
                              element;
                          }}
                          animate={{
                            opacity:
                              isActive
                                ? 1
                                : 0.38,

                            scale:
                              isActive
                                ? 1
                                : 0.995,
                          }}
                          transition={{
                            duration:
                              0.3,
                          }}
                          className={[
                            "relative mb-5 rounded-xl border px-3 py-3 transition-colors duration-300",
                            isActive
                              ? "border-accent/20 bg-accent/[0.035]"
                              : "border-transparent",
                          ].join(
                            " ",
                          )}
                        >
                          {/* phase label */}

                          <div className="mb-2 flex items-center gap-3">
                            <span
                              className={[
                                "font-code text-[7px] font-semibold",
                                isActive
                                  ? "text-accent"
                                  : "text-text-muted",
                              ].join(
                                " ",
                              )}
                            >
                              {
                                phases[
                                  group
                                    .phase
                                ]
                                  .number
                              }
                            </span>

                            <span
                              className={[
                                "font-code text-[7px] uppercase tracking-[0.14em]",
                                isActive
                                  ? "text-text-secondary"
                                  : "text-text-muted",
                              ].join(
                                " ",
                              )}
                            >
                              {
                                group.label
                              }
                            </span>
                          </div>

                          {group.lines.map(
                            (
                              line,
                              lineIndex,
                            ) => (
                              <CodeLine
                                key={`${group.phase}-${lineIndex}`}
                                number={getLineNumber(
                                  groupIndex,
                                  lineIndex,
                                )}
                                content={
                                  line
                                }
                                active={
                                  isActive
                                }
                              />
                            ),
                          )}
                        </motion.div>
                      );
                    },
                  )}
                </pre>
              </div>

              {/* bottom gradient */}

              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/95 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* =================================================
              SIMPLE PRINCIPLE
          ================================================== */}

          <div className="border-t border-border bg-background/20 px-5 py-4 sm:px-7">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-3xl text-xs leading-5 text-text-secondary sm:text-[13px]">
                I do not treat a feature
                as an isolated screen.
                I look at the requirement,
                the data behind it, the
                rules affecting it and the
                downstream impact before
                deciding how the flow
                should be implemented.
              </p>

              <div className="flex shrink-0 items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" />

                <span className="font-code text-[7px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                  Requirement → Flow →
                  Decision → Outcome
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CODE LINE
========================================================= */

function CodeLine({
  number,
  content,
  active,
}) {
  return (
    <div className="grid grid-cols-[34px_minmax(0,1fr)] text-[9px] leading-[1.8] sm:text-[10px]">
      <span className="select-none text-text-muted/35">
        {String(number).padStart(
          2,
          "0",
        )}
      </span>

      <code
        className={
          active
            ? getCodeColour(
                content,
              )
            : "text-text-muted"
        }
      >
        {content || " "}
      </code>
    </div>
  );
}

/* =========================================================
   CODE COLOUR

   Only visual syntax hierarchy.
   No technology callouts.
========================================================= */

function getCodeColour(content) {
  const trimmed =
    content.trim();

  if (
    trimmed.startsWith(
      "public function",
    )
  ) {
    return "text-cyan";
  }

  if (
    trimmed.startsWith(
      "return ",
    )
  ) {
    return "text-success";
  }

  if (
    trimmed.startsWith(
      "if ",
    ) ||
    trimmed.startsWith(
      "if(",
    ) ||
    trimmed.startsWith(
      "} elseif",
    ) ||
    trimmed.startsWith(
      "foreach",
    )
  ) {
    return "text-accent";
  }

  if (
    trimmed.startsWith(
      "$",
    )
  ) {
    return "text-text-primary";
  }

  if (
    trimmed.includes(
      "validate",
    ) ||
    trimmed.includes(
      "evaluate",
    ) ||
    trimmed.includes(
      "resolve",
    ) ||
    trimmed.includes(
      "calculate",
    ) ||
    trimmed.includes(
      "apply",
    ) ||
    trimmed.includes(
      "save",
    ) ||
    trimmed.includes(
      "recalculate",
    )
  ) {
    return "text-text-primary";
  }

  if (
    trimmed === "{" ||
    trimmed === "}" ||
    trimmed === ""
  ) {
    return "text-text-muted";
  }

  return "text-text-secondary";
}

/* =========================================================
   DISPLAY LINE NUMBER

   Gives continuous-looking editor line numbers.
========================================================= */

function getLineNumber(
  groupIndex,
  lineIndex,
) {
  let count = 1;

  for (
    let index = 0;
    index < groupIndex;
    index++
  ) {
    count +=
      codeGroups[index].lines
        .length;
  }

  return count + lineIndex;
}

export default HowIBuild;